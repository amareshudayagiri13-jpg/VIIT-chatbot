import mongoose from "mongoose";
import dotenv from "dotenv";
import CollegeInfo from "./models/CollegeInfo.js";

dotenv.config();

const viitData = [
  {
    category: "courses",
    data: {
      undergraduate: [
        { name: "CSE", fee: 85000, eamcet_cutoff: 12000 },
        { name: "CSE (AI & ML)", fee: 90000, eamcet_cutoff: 8000 },
        { name: "CSE (Data Science)", fee: 90000, eamcet_cutoff: 9000 },
        { name: "CSE (IoT)", fee: 88000, eamcet_cutoff: 10000 },
        { name: "ECE", fee: 75000, eamcet_cutoff: 18000 },
        { name: "EEE", fee: 70000, eamcet_cutoff: 25000 },
        { name: "Mechanical", fee: 65000, eamcet_cutoff: 30000 },
        { name: "Civil", fee: 60000, eamcet_cutoff: 35000 },
        { name: "IT", fee: 82000, eamcet_cutoff: 14000 },
      ],
      postgraduate: ["M.Tech CSE", "M.Tech ECE", "MBA", "MCA"],
    },
  },
  {
    category: "hostel",
    data: {
      boys_fee: 75000,
      girls_fee: 80000,
      facilities: ["WiFi", "RO Water", "Gym", "CCTV", "Laundry", "Medical Room"],
      food: "3 meals per day included",
      ac_available: true,
    },
  },
  {
    category: "placements",
    data: {
      percentage: "92%",
      highest_package: "32 LPA",
      average_package: "4.5 LPA",
      top_companies: [
        "TCS", "Infosys", "Wipro", "Amazon",
        "Deloitte", "Cognizant", "HCL", "Accenture"
      ],
    },
  },
  {
    category: "admissions",
    data: {
      process: "Based on EAMCET/JEE rank",
      lateral_entry: "Available for diploma holders",
      management_quota: "Available, contact admissions office",
      documents: ["10th Marks", "12th Marks", "EAMCET Rank Card", "Aadhar Card"],
    },
  },
  {
    category: "contact",
    data: {
      phone: "0891-123456",
      email: "admissions@viit.ac.in",
      address: "Visakhapatnam, Andhra Pradesh, India",
      website: "www.viit.ac.in",
    },
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected!");

    await CollegeInfo.deleteMany({});
    console.log("Old data cleared!");

    await CollegeInfo.insertMany(viitData);
    console.log("VIIT data seeded successfully! ✅");

    mongoose.connection.close();
  } catch (error) {
    console.error("Seeding error:", error.message);
  }
}

seedDatabase();