const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const mongoose = require('mongoose');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ── Topic detector ──
function detectTopic(question) {
  const q = question.toLowerCase();

  if (q.match(/eapcet|cutoff|rank|closing|opening|oc|bc|sc|st/))
    return 'eapcet_ranks';
  if (q.match(/place|job|company|salary|package|recruit|tcs|infosys|wipro|lpa/))
    return 'placements';
  if (q.match(/hostel|room|stay|mess|food|accommodation/))
    return 'hostel';
  if (q.match(/bus|transport|route|pickup|drop|commute/))
    return 'bus_routes';
  if (q.match(/fest|event|cultural|techfest|sports|annual|tarang/))
    return 'fests';
  if (q.match(/branch|course|cse|ece|civil|mech|mba|mca|btech|mtech|it|aiml|ds/))
    return 'branches';

  return 'faqs';
}

// ── POST /api/chat ──
router.post('/chat', async (req, res) => {
  try {
    const question = req.body.question;

    if (!question) {
      return res.status(400).json({ error: 'Question is required!' });
    }

    const db = mongoose.connection.db;

    // Step 1: Detect topic
    const topic = detectTopic(question);
    console.log(`🔍 Detected topic: ${topic}`);

    // Step 2: Fetch relevant data from MongoDB
    let dbData = [];
    try {
      const collection = db.collection(topic);
      dbData = await collection.find({}).toArray();
      console.log(`📦 Found ${dbData.length} records from ${topic}`);
    } catch (err) {
      console.log(`⚠️ Collection ${topic} not found, using faqs`);
      dbData = await db.collection('faqs').find({}).toArray();
    }

    // Step 3: Build Gemini prompt
    const prompt = `
      You are VIIT Helpdesk Chatbot for
      Vignan's Institute of Information Technology,
      Duvvada, Visakhapatnam, Andhra Pradesh.

      Here is the relevant college data from our database:
      ${JSON.stringify(dbData, null, 2)}

      Student Question: "${question}"

      Instructions:
      1. Answer ONLY based on the data provided above
      2. If data has cutoff ranks, show them in a clean format
      3. Be friendly, helpful and use emojis
      4. Keep answer clear and concise
      5. If asked about specific category/branch, show only that data
      6. Always end with "For more info contact: helpdesk@viit.ac.in"
    `;

    // Step 4: Send to Gemini
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const result = await model.generateContent(prompt);
    const answer = result.response.text();

    // Step 5: Send response
    res.json({
      answer: answer,
      topic: topic,
      recordsFound: dbData.length
    });

  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({
      answer: 'Sorry! Something went wrong. Please try again! 😊'
    });
  }
});

module.exports = router;