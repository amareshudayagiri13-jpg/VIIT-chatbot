const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://amareshudayagiri13_db_user:2in5ZVoSbpqr5rIV@viit-chatbot-cluster.lbou4yz.mongodb.net/viitchatbot";

mongoose.connect(MONGO_URI);

// ─────────────────────────────────────────
// SCHEMA
// ─────────────────────────────────────────
const librarySchema = new mongoose.Schema({
  institution: String,
  date: String,
  totalVolumes: Number,
  totalTitles: Number,
  branches: [
    {
      name: String,
      course: String, // "UG", "PG", or "General"
      noOfTitles: Number,
      noOfVolumes: Number,
    },
  ],
  scAndStBooks: {
    noOfTitles: Number,
    noOfVolumes: Number,
  },
  libraryArea: String,
  additionalInfo: {
    noOfProjectRecords: Number,
    noOfMagazines: Number,
    noOfCDs: Number,
    noOfComputers: Number,
    noOfPrintedJournals: Number,
    referenceBooks: Number,
    eBooks: Number,
    eJournals: Number,
  },

  // ── Vignana Dhara E-Resources ──────────
  onlineEResources: [
    {
      sNo: Number,
      publisher: String,
      resources: String,
      linkToAccess: String,
      category: String,
    },
  ],
  delnetResources: [
    {
      sNo: Number,
      publisher: String,
      resources: String,
      linkToAccess: String,
      category: String,
    },
  ],
  eBooksEngineering: [
    {
      sNo: Number,
      publisher: String,
      resources: String,
      linkToAccess: String,
      category: String,
    },
  ],

  // ── Library Services ───────────────────
  libraryServices: [
    {
      sNo: Number,
      service: String,
    },
  ],
});

const Library = mongoose.model("Library", librarySchema);

// ─────────────────────────────────────────
// DATA
// ─────────────────────────────────────────
const libraryData = {
  institution: "Vignan's IIT(A) : VSP",
  date: "28-01-2026",
  totalVolumes: 60357,
  totalTitles: 11548,

  branches: [
    // UG Branches
    { name: "CIVIL", course: "UG", noOfTitles: 570, noOfVolumes: 4279 },
    { name: "EEE", course: "UG", noOfTitles: 1354, noOfVolumes: 7695 },
    { name: "MECH", course: "UG", noOfTitles: 1276, noOfVolumes: 7630 },
    { name: "ECE", course: "UG", noOfTitles: 1541, noOfVolumes: 6412 },
    { name: "CSE", course: "UG", noOfTitles: 897, noOfVolumes: 7495 },
    { name: "AI&DS", course: "UG", noOfTitles: 270, noOfVolumes: 2356 },
    { name: "IT", course: "UG", noOfTitles: 792, noOfVolumes: 4236 },
    { name: "ECM", course: "UG", noOfTitles: 685, noOfVolumes: 3483 },
    { name: "BS&H", course: "UG", noOfTitles: 752, noOfVolumes: 4051 },

    // PG Branches (M.TECH)
    { name: "M.TECH - PID", course: "PG", noOfTitles: 248, noOfVolumes: 918 },
    { name: "M.TECH - MD", course: "PG", noOfTitles: 208, noOfVolumes: 715 },
    { name: "M.TECH - ECE", course: "PG", noOfTitles: 305, noOfVolumes: 524 },
    { name: "M.TECH - DECS", course: "PG", noOfTitles: 220, noOfVolumes: 587 },
    { name: "M.TECH - CSE", course: "PG", noOfTitles: 458, noOfVolumes: 769 },
    { name: "M.TECH - AL&ML", course: "PG", noOfTitles: 265, noOfVolumes: 430 },
    { name: "M.TECH - TE", course: "PG", noOfTitles: 118, noOfVolumes: 212 },
    { name: "M.TECH - IT", course: "PG", noOfTitles: 180, noOfVolumes: 548 },

    // Other PG
    { name: "MCA", course: "PG", noOfTitles: 183, noOfVolumes: 2962 },
    { name: "MBA", course: "PG", noOfTitles: 605, noOfVolumes: 4195 },

    // General
    {
      name: "GENERAL BOOKS",
      course: "General",
      noOfTitles: 621,
      noOfVolumes: 860,
    },
  ],

  scAndStBooks: {
    noOfTitles: 160,
    noOfVolumes: 664,
  },

  libraryArea: "1545 SQM",

  additionalInfo: {
    noOfProjectRecords: 2438,
    noOfMagazines: 50,
    noOfCDs: 1517,
    noOfComputers: 60,
    noOfPrintedJournals: 65,
    referenceBooks: 6647,
    eBooks: 6226,
    eJournals: 7626,
  },

  // ── Vignana Dhara Online E-Resources ──
  onlineEResources: [
    {
      sNo: 1,
      publisher: "DELNET",
      resources: "840",
      linkToAccess: "http://delnet.in/index.html",
      category: "online_e_resources",
    },
    {
      sNo: 2,
      publisher: "IEEE-E Journals",
      resources: "193",
      linkToAccess: "https://ieeexplore.ieee.org",
      category: "online_e_resources",
    },
    {
      sNo: 3,
      publisher: "EBSCO E Books",
      resources: "6226 E-Books",
      linkToAccess: "https://www.ebsco.com",
      category: "online_e_resources",
    },
    {
      sNo: 4,
      publisher: "J GATE - E Journals",
      resources: "17985",
      linkToAccess: "https://jgatenext.com",
      category: "online_e_resources",
    },
    {
      sNo: 5,
      publisher: "KNIMBUS",
      resources: "Remote Access",
      linkToAccess: "https://www.knimbus.com",
      category: "online_e_resources",
    },
    {
      sNo: 6,
      publisher: "NList - INFLIBNET",
      resources: "Membership",
      linkToAccess: "https://inflibnet.ac.in",
      category: "online_e_resources",
    },
    {
      sNo: 7,
      publisher: "National Digital Library",
      resources: "Membership",
      linkToAccess: "https://ndl.iitkgp.ac.in",
      category: "online_e_resources",
    },
  ],

  // ── DELNET Resources ──────────────────
  delnetResources: [
    {
      sNo: 1,
      publisher: "DELNET",
      resources:
        "Provide access to DELNET Union Catalogues and other Databases to Member-Libraries.",
      linkToAccess: "www.delnet.in",
      category: "delnet",
    },
    {
      sNo: 2,
      publisher: "N list - INFLIBNET",
      resources: "Inflibnet membership",
      linkToAccess: "www.nlist.inflibnet.sc.in",
      category: "delnet",
    },
    {
      sNo: 3,
      publisher: "NPTEL",
      resources: "Free Access Link",
      linkToAccess: "www.nptel.ac.in",
      category: "delnet",
    },
    {
      sNo: 4,
      publisher: "National Digital Library",
      resources: "Free Access Link",
      linkToAccess: "www.ndl.iitkgp.ac.in",
      category: "delnet",
    },
  ],

  // ── e-Books Engineering ───────────────
  eBooksEngineering: [
    {
      sNo: 1,
      publisher: "Ebsco e-books Engineering",
      resources: "e-books: 6226",
      linkToAccess: "https://search.ebscohost.com",
      category: "ebooks_engineering",
    },
  ],

  // ── Library Services Offered ──────────
  libraryServices: [
    { sNo: 1, service: "Text Book Services" },
    { sNo: 2, service: "Reference Service" },
    { sNo: 3, service: "Question Papers" },
    { sNo: 4, service: "E-Journals Service" },
    { sNo: 5, service: "Internet Service" },
    { sNo: 6, service: "Photocopying Service" },
    { sNo: 7, service: "Newspapers" },
    { sNo: 8, service: "Book Bank Facility" },
    { sNo: 9, service: "OPAC Service" },
    { sNo: 10, service: "Competitive Books Service" },
    { sNo: 11, service: "Project Records" },
    { sNo: 12, service: "Journals Back Volumes" },
    { sNo: 13, service: "CD ROM Service" },
    { sNo: 14, service: "Special Reference Service" },
    { sNo: 15, service: "Digital Library Service" },
    { sNo: 16, service: "Job Notifications" },
  ],
};

// ─────────────────────────────────────────
// SEED
// ─────────────────────────────────────────
async function seedDatabase() {
  try {
    await Library.deleteMany({});
    console.log("Cleared existing library data");

    await Library.create(libraryData);
    console.log("Library data seeded successfully!");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding data:", error);
    mongoose.connection.close();
  }
}

seedDatabase();
