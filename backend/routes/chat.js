import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import CollegeInfo from "../models/CollegeInfo.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || messages.length === 0) {
      return res.status(400).json({ error: "No messages provided" });
    }

    const collegeData = await CollegeInfo.find({});
    const context = collegeData.map(item =>
      `${item.category}: ${JSON.stringify(item.data)}`
    ).join("\n");

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: `You are VIIT Smart Assistant for Vignan's Institute of Information Technology (VIIT), 
      Visakhapatnam, Andhra Pradesh, India. 
      You only know about this specific college and answer all questions assuming the user is asking about Vignan's VIIT Visakhapatnam only.
      Never mention or refer to any other college named VIIT.
      Use this real VIIT college data to answer accurately:
      ${context}
      Help students with:
      - Admissions and EAMCET cutoffs
      - Fee structure and scholarships
      - Hostel facilities
      - Courses and departments
      - Placement statistics and companies
      - Campus facilities
      Be friendly, concise and accurate.`
    });

    const lastMessage = messages[messages.length - 1].content;
    const result = await model.generateContent(lastMessage);
    const reply = result.response.text();

    res.json({ reply });

  } catch (error) {
    console.error("Gemini error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;