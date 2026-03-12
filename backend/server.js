import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoute from "./routes/chat.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// create model
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// request logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// routes
app.use("/chat", chatRoute);

app.get("/", (req, res) => {
  res.send("VIIT Chatbot Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});