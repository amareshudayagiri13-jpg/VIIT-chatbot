import mongoose from "mongoose";

const collegeInfoSchema = new mongoose.Schema({
  category: String,
  data: mongoose.Schema.Types.Mixed
});

export default mongoose.model("CollegeInfo", collegeInfoSchema);