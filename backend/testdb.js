import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log("Connecting to:", process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 10000,
  family: 4
})
  .then(() => {
    console.log("MongoDB connected successfully! ✅");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Connection failed:", err.message);
  });