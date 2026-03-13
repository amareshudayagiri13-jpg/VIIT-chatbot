const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const dns = require('dns');
const rateLimit = require('express-rate-limit');

// Force Google DNS
dns.setServers(['8.8.8.8', '8.8.4.4']);

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiter
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,  // 3 messages for testing
  message: { answer: '⚠️ Too many messages! Please wait a minute and try again.' }
});
app.use('/api/chat', limiter);

// Routes
const chatRoute = require('./routes/chat');
app.use('/api', chatRoute);

// Test route
app.get('/', (req, res) => {
  res.json({ message: '🎓 VIIT Chatbot Backend is Running!' });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 15000,
  family: 4,
})
  .then(() => console.log('✅ MongoDB Connected!'))
  .catch((err) => console.log('❌ MongoDB Error:', err));

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});