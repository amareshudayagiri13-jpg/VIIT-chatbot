const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dns = require('dns');

dns.setServers(['8.8.8.8', '8.8.4.4']);
dotenv.config();

// ── EAPCET 2025 Data ──
const eapcetData2025 = [
  {
    branch: "CIV", branchFullName: "Civil Engineering", exam: "EAPCET", year: 2025,
    cutoffs: {
      OC:  { boys: 59183,  girls: 65239  },
      EWS: { boys: 150628, girls: 150628 },
      BCA: { boys: 124453, girls: 128651 },
      BCB: { boys: 163469, girls: 140731 },
      BCC: { boys: "Not Available", girls: "Not Available" },
      BCD: { boys: 89644,  girls: 144796 },
      BCE: { boys: "Not Available", girls: "Not Available" },
      SC1: { boys: 177983, girls: 177983 },
      SC2: { boys: 179900, girls: 179900 },
      SC3: { boys: 179825, girls: 176575 },
      ST:  { boys: 179584, girls: 159088 },
    }
  },
  {
    branch: "EEE", branchFullName: "Electrical & Electronics Engineering", exam: "EAPCET", year: 2025,
    cutoffs: {
      OC:  { boys: 32278,  girls: 40316  },
      EWS: { boys: 75850,  girls: 97722  },
      BCA: { boys: 93737,  girls: 114722 },
      BCB: { boys: 83254,  girls: 126485 },
      BCC: { boys: "Not Available", girls: 54287 },
      BCD: { boys: 47180,  girls: 56936  },
      BCE: { boys: 74768,  girls: "Not Available" },
      SC1: { boys: "Not Available", girls: "Not Available" },
      SC2: { boys: 147327, girls: "Not Available" },
      SC3: { boys: 171132, girls: "Not Available" },
      ST:  { boys: 158305, girls: 153125 },
    }
  },
  {
    branch: "MEC", branchFullName: "Mechanical Engineering", exam: "EAPCET", year: 2025,
    cutoffs: {
      OC:  { boys: 59295,  girls: 79875  },
      EWS: { boys: 137811, girls: 132773 },
      BCA: { boys: 112261, girls: 178168 },
      BCB: { boys: 131983, girls: 144501 },
      BCC: { boys: "Not Available", girls: "Not Available" },
      BCD: { boys: 75789,  girls: 133205 },
      BCE: { boys: 157170, girls: "Not Available" },
      SC1: { boys: 161796, girls: "Not Available" },
      SC2: { boys: 178518, girls: 119966 },
      SC3: { boys: 143231, girls: 153155 },
      ST:  { boys: 169852, girls: 171370 },
    }
  },
  {
    branch: "ECE", branchFullName: "Electronics & Communication Engineering", exam: "EAPCET", year: 2025,
    cutoffs: {
      OC:  { boys: 18413,  girls: 18413  },
      EWS: { boys: 46848,  girls: 61100  },
      BCA: { boys: 40850,  girls: 41979  },
      BCB: { boys: 60354,  girls: 52688  },
      BCC: { boys: 33150,  girls: "Not Available" },
      BCD: { boys: 34227,  girls: 31115  },
      BCE: { boys: 177325, girls: 126326 },
      SC1: { boys: 75263,  girls: 166116 },
      SC2: { boys: 170185, girls: 152890 },
      SC3: { boys: 108629, girls: 114199 },
      ST:  { boys: 179040, girls: 169902 },
    }
  },
  {
    branch: "CSE", branchFullName: "Computer Science & Engineering", exam: "EAPCET", year: 2025,
    cutoffs: {
      OC:  { boys: 15410,  girls: 9091   },
      EWS: { boys: 25282,  girls: 22931  },
      BCA: { boys: 36480,  girls: 34530  },
      BCB: { boys: 40866,  girls: 41891  },
      BCC: { boys: 103012, girls: 33050  },
      BCD: { boys: 22943,  girls: 22183  },
      BCE: { boys: 107215, girls: 56975  },
      SC1: { boys: 70765,  girls: 129126 },
      SC2: { boys: 162910, girls: 171188 },
      SC3: { boys: 77424,  girls: 49483  },
      ST:  { boys: 119356, girls: 169005 },
    }
  },
  {
    branch: "INF", branchFullName: "Information Technology", exam: "EAPCET", year: 2025,
    cutoffs: {
      OC:  { boys: 20497,  girls: 24438  },
      EWS: { boys: 42904,  girls: 39103  },
      BCA: { boys: 62227,  girls: 88376  },
      BCB: { boys: 69404,  girls: 79178  },
      BCC: { boys: "Not Available", girls: 48288 },
      BCD: { boys: 36060,  girls: 32686  },
      BCE: { boys: 118236, girls: 150376 },
      SC1: { boys: 145978, girls: 64777  },
      SC2: { boys: 174891, girls: 143420 },
      SC3: { boys: 165066, girls: 149425 },
      ST:  { boys: 167368, girls: 167368 },
    }
  },
  {
    branch: "ECM", branchFullName: "Electronics & Computer Engineering", exam: "EAPCET", year: 2025,
    cutoffs: {
      OC:  { boys: 28956,  girls: 28956  },
      EWS: { boys: 58361,  girls: 46954  },
      BCA: { boys: 105397, girls: 74356  },
      BCB: { boys: 54020,  girls: 57540  },
      BCC: { boys: "Not Available", girls: "Not Available" },
      BCD: { boys: 34514,  girls: 45347  },
      BCE: { boys: "Not Available", girls: 165093 },
      SC1: { boys: 155391, girls: "Not Available" },
      SC2: { boys: "Not Available", girls: 166363 },
      SC3: { boys: 140068, girls: 142078 },
      ST:  { boys: 146740, girls: 146740 },
    }
  },
  {
    branch: "AID", branchFullName: "CSE - AI & Data Science", exam: "EAPCET", year: 2025,
    cutoffs: {
      OC:  { boys: 17329,  girls: 13974  },
      EWS: { boys: 27994,  girls: 27740  },
      BCA: { boys: 36314,  girls: 37575  },
      BCB: { boys: 44899,  girls: 48313  },
      BCC: { boys: "Not Available", girls: 68202 },
      BCD: { boys: 26828,  girls: 27140  },
      BCE: { boys: 86506,  girls: 50768  },
      SC1: { boys: 148363, girls: 148363 },
      SC2: { boys: 148651, girls: 134367 },
      SC3: { boys: 72006,  girls: 101821 },
      ST:  { boys: 172805, girls: 133416 },
    }
  },
  {
    branch: "CAI", branchFullName: "CSE - AI & ML", exam: "EAPCET", year: 2025,
    cutoffs: {
      OC:  { boys: 17926,  girls: 12873  },
      EWS: { boys: 26072,  girls: 23818  },
      BCA: { boys: 34661,  girls: 30136  },
      BCB: { boys: 49321,  girls: 43493  },
      BCC: { boys: 96473,  girls: "Not Available" },
      BCD: { boys: 28721,  girls: 28144  },
      BCE: { boys: 113620, girls: 104541 },
      SC1: { boys: 123855, girls: 123855 },
      SC2: { boys: 175805, girls: 169758 },
      SC3: { boys: 105130, girls: 155173 },
      ST:  { boys: 162192, girls: 162192 },
    }
  },
  {
    branch: "CSC", branchFullName: "CSE - Cyber Security", exam: "EAPCET", year: 2025,
    cutoffs: {
      OC:  { boys: 18251,  girls: 16003  },
      EWS: { boys: 31703,  girls: 24385  },
      BCA: { boys: 48707,  girls: 42986  },
      BCB: { boys: 63380,  girls: 61990  },
      BCC: { boys: "Not Available", girls: "Not Available" },
      BCD: { boys: 28895,  girls: 29759  },
      BCE: { boys: 98239,  girls: 133219 },
      SC1: { boys: 59381,  girls: 59381  },
      SC2: { boys: 168778, girls: 176933 },
      SC3: { boys: 149006, girls: 93568  },
      ST:  { boys: 152621, girls: 139141 },
    }
  },
  {
    branch: "CSD", branchFullName: "CSE - Data Science", exam: "EAPCET", year: 2025,
    cutoffs: {
      OC:  { boys: 12473,  girls: 15469  },
      EWS: { boys: 35814,  girls: 29736  },
      BCA: { boys: 43189,  girls: 30793  },
      BCB: { boys: 59434,  girls: 60308  },
      BCC: { boys: 87754,  girls: "Not Available" },
      BCD: { boys: 26539,  girls: 24992  },
      BCE: { boys: 92665,  girls: 72125  },
      SC1: { boys: 148145, girls: 148145 },
      SC2: { boys: 180074, girls: 157113 },
      SC3: { boys: 74418,  girls: 91604  },
      ST:  { boys: 146299, girls: 81667  },
    }
  },
];

// ── EAPCET 2024 Data ──
const eapcetData2024 = [
  {
    branch: "CIV", branchFullName: "Civil Engineering", exam: "EAPCET", year: 2024,
    cutoffs: {
      OC:  { boys: 71260,  girls: 61598  },
      EWS: { boys: 131052, girls: 140795 },
      BCA: { boys: 121961, girls: 120345 },
      BCB: { boys: 162840, girls: 175856 },
      BCC: { boys: 135219, girls: "Not Available" },
      BCD: { boys: 97069,  girls: 143084 },
      BCE: { boys: 175374, girls: "Not Available" },
      SC:  { boys: 159584, girls: 169614 },
      ST:  { boys: 152954, girls: 156667 },
    }
  },
  {
    branch: "EEE", branchFullName: "Electrical & Electronics Engineering", exam: "EAPCET", year: 2024,
    cutoffs: {
      OC:  { boys: 38517,  girls: 52386  },
      EWS: { boys: 77155,  girls: 92347  },
      BCA: { boys: 75432,  girls: 112127 },
      BCB: { boys: 81382,  girls: 86127  },
      BCC: { boys: "Not Available", girls: "Not Available" },
      BCD: { boys: 56168,  girls: 53878  },
      BCE: { boys: 147757, girls: 142592 },
      SC:  { boys: 170302, girls: 173276 },
      ST:  { boys: 158028, girls: "Not Available" },
    }
  },
  {
    branch: "MEC", branchFullName: "Mechanical Engineering", exam: "EAPCET", year: 2024,
    cutoffs: {
      OC:  { boys: 43513,  girls: 79761  },
      EWS: { boys: 129810, girls: 120931 },
      BCA: { boys: 112417, girls: 170354 },
      BCB: { boys: 133363, girls: 124589 },
      BCC: { boys: 175032, girls: "Not Available" },
      BCD: { boys: 75848,  girls: 150668 },
      BCE: { boys: 160470, girls: "Not Available" },
      SC:  { boys: 174593, girls: 162121 },
      ST:  { boys: 123844, girls: 177112 },
    }
  },
  {
    branch: "ECE", branchFullName: "Electronics & Communication Engineering", exam: "EAPCET", year: 2024,
    cutoffs: {
      OC:  { boys: 21738,  girls: 26547  },
      EWS: { boys: 45912,  girls: 40060  },
      BCA: { boys: 35903,  girls: 34771  },
      BCB: { boys: 39870,  girls: 38304  },
      BCC: { boys: 58289,  girls: "Not Available" },
      BCD: { boys: 28931,  girls: 28569  },
      BCE: { boys: 79581,  girls: 58614  },
      SC:  { boys: 121200, girls: 116032 },
      ST:  { boys: 176438, girls: 177852 },
    }
  },
  {
    branch: "CSE", branchFullName: "Computer Science & Engineering", exam: "EAPCET", year: 2024,
    cutoffs: {
      OC:  { boys: 13745,  girls: 12108  },
      EWS: { boys: 25234,  girls: 25518  },
      BCA: { boys: 22531,  girls: 19841  },
      BCB: { boys: 29577,  girls: 29956  },
      BCC: { boys: 15081,  girls: 31226  },
      BCD: { boys: 17606,  girls: 16870  },
      BCE: { boys: 52983,  girls: 57037  },
      SC:  { boys: 51726,  girls: 87060  },
      ST:  { boys: 115599, girls: 117889 },
    }
  },
  {
    branch: "INF", branchFullName: "Information Technology", exam: "EAPCET", year: 2024,
    cutoffs: {
      OC:  { boys: 19149,  girls: 26994  },
      EWS: { boys: 48461,  girls: 37782  },
      BCA: { boys: 37447,  girls: 47979  },
      BCB: { boys: 58035,  girls: 57703  },
      BCC: { boys: "Not Available", girls: "Not Available" },
      BCD: { boys: 33902,  girls: 31990  },
      BCE: { boys: 157459, girls: 117939 },
      SC:  { boys: 149934, girls: 117294 },
      ST:  { boys: 155666, girls: 155459 },
    }
  },
  {
    branch: "ECM", branchFullName: "Electronics & Computer Engineering", exam: "EAPCET", year: 2024,
    cutoffs: {
      OC:  { boys: 25140,  girls: 19474  },
      EWS: { boys: 50379,  girls: 56758  },
      BCA: { boys: 52930,  girls: 54887  },
      BCB: { boys: 59644,  girls: 133684 },
      BCC: { boys: "Not Available", girls: "Not Available" },
      BCD: { boys: 33161,  girls: 32120  },
      BCE: { boys: 131737, girls: 116699 },
      SC:  { boys: 139174, girls: 150701 },
      ST:  { boys: 164475, girls: 162512 },
    }
  },
  {
    branch: "AID", branchFullName: "CSE - AI & Data Science", exam: "EAPCET", year: 2024,
    cutoffs: {
      OC:  { boys: 16649,  girls: 16265  },
      EWS: { boys: 33761,  girls: 27973  },
      BCA: { boys: 33444,  girls: 47337  },
      BCB: { boys: 58225,  girls: 57784  },
      BCC: { boys: 157192, girls: 84071  },
      BCD: { boys: 25255,  girls: 26034  },
      BCE: { boys: 125768, girls: 130344 },
      SC:  { boys: 98267,  girls: 127823 },
      ST:  { boys: 134471, girls: 128845 },
    }
  },
  {
    branch: "CAI", branchFullName: "CSE - AI & ML", exam: "EAPCET", year: 2024,
    cutoffs: {
      OC:  { boys: 16075,  girls: 13385  },
      EWS: { boys: 35430,  girls: 23480  },
      BCA: { boys: 28429,  girls: 41629  },
      BCB: { boys: 30435,  girls: 48154  },
      BCC: { boys: 68822,  girls: 47436  },
      BCD: { boys: 23085,  girls: 22069  },
      BCE: { boys: 142777, girls: 103194 },
      SC:  { boys: 129685, girls: 121492 },
      ST:  { boys: 158310, girls: 161566 },
    }
  },
  {
    branch: "CSC", branchFullName: "CSE - Cyber Security", exam: "EAPCET", year: 2024,
    cutoffs: {
      OC:  { boys: 17294,  girls: 12154  },
      EWS: { boys: 32646,  girls: 30657  },
      BCA: { boys: 33349,  girls: 36464  },
      BCB: { boys: 42187,  girls: 39230  },
      BCC: { boys: "Not Available", girls: "Not Available" },
      BCD: { boys: 27897,  girls: 25587  },
      BCE: { boys: 161278, girls: "Not Available" },
      SC:  { boys: 85438,  girls: 115637 },
      ST:  { boys: 126137, girls: 175516 },
    }
  },
  {
    branch: "CSD", branchFullName: "CSE - Data Science", exam: "EAPCET", year: 2024,
    cutoffs: {
      OC:  { boys: 18888,  girls: 16772  },
      EWS: { boys: 32850,  girls: 32262  },
      BCA: { boys: 39938,  girls: 30720  },
      BCB: { boys: 39003,  girls: 30319  },
      BCC: { boys: 46615,  girls: "Not Available" },
      BCD: { boys: 24320,  girls: 25405  },
      BCE: { boys: 98315,  girls: 53719  },
      SC:  { boys: 84687,  girls: 86971  },
      ST:  { boys: 153926, girls: 167900 },
    }
  },
];

// ── ECET 2024 Data ──
const ecetData2024 = [
  {
    branch: "CIV", branchFullName: "Civil Engineering", exam: "ECET", year: 2024,
    cutoffs: {
      OC:  { boys: 156,  girls: "Not Available" },
      EWS: { boys: 1740, girls: 2490 },
      BCA: { boys: 414,  girls: 414  },
      BCB: { boys: 463,  girls: 822  },
      BCC: { boys: "Not Available", girls: "Not Available" },
      BCD: { boys: 453,  girls: 379  },
      BCE: { boys: 701,  girls: 1128 },
      SC:  { boys: 1951, girls: 18846 },
      ST:  { boys: 897,  girls: "Not Available" },
    }
  },
  {
    branch: "EEE", branchFullName: "Electrical & Electronics Engineering", exam: "ECET", year: 2024,
    cutoffs: {
      OC:  { boys: 122,  girls: 175  },
      EWS: { boys: "Not Available", girls: "Not Available" },
      BCA: { boys: 338,  girls: "Not Available" },
      BCB: { boys: 122,  girls: "Not Available" },
      BCC: { boys: "Not Available", girls: "Not Available" },
      BCD: { boys: 154,  girls: 245  },
      BCE: { boys: "Not Available", girls: "Not Available" },
      SC:  { boys: 1151, girls: "Not Available" },
      ST:  { boys: "Not Available", girls: 2969 },
    }
  },
  {
    branch: "MEC", branchFullName: "Mechanical Engineering", exam: "ECET", year: 2024,
    cutoffs: {
      OC:  { boys: 127,  girls: "Not Available" },
      EWS: { boys: "Not Available", girls: "Not Available" },
      BCA: { boys: 267,  girls: "Not Available" },
      BCB: { boys: 438,  girls: "Not Available" },
      BCC: { boys: 3308, girls: "Not Available" },
      BCD: { boys: 202,  girls: "Not Available" },
      BCE: { boys: 1191, girls: "Not Available" },
      SC:  { boys: 548,  girls: "Not Available" },
      ST:  { boys: 828,  girls: "Not Available" },
    }
  },
  {
    branch: "ECE", branchFullName: "Electronics & Communication Engineering", exam: "ECET", year: 2024,
    cutoffs: {
      OC:  { boys: 329,  girls: "Not Available" },
      EWS: { boys: "Not Available", girls: "Not Available" },
      BCA: { boys: 543,  girls: 532  },
      BCB: { boys: 407,  girls: 1125 },
      BCC: { boys: "Not Available", girls: "Not Available" },
      BCD: { boys: 455,  girls: 533  },
      BCE: { boys: 7626, girls: 7626 },
      SC:  { boys: 215,  girls: 2108 },
      ST:  { boys: 3455, girls: "Not Available" },
    }
  },
  {
    branch: "CSE", branchFullName: "Computer Science & Engineering", exam: "ECET", year: 2024,
    cutoffs: {
      OC:  { boys: 257,  girls: 204  },
      EWS: { boys: "Not Available", girls: "Not Available" },
      BCA: { boys: 939,  girls: 497  },
      BCB: { boys: 770,  girls: 376  },
      BCC: { boys: "Not Available", girls: "Not Available" },
      BCD: { boys: 310,  girls: 285  },
      BCE: { boys: 1251, girls: "Not Available" },
      SC:  { boys: 1472, girls: 3402 },
      ST:  { boys: 5104, girls: "Not Available" },
    }
  },
  {
    branch: "INF", branchFullName: "Information Technology", exam: "ECET", year: 2024,
    cutoffs: {
      OC:  { boys: 1317, girls: 1572 },
      EWS: { boys: "Not Available", girls: "Not Available" },
      BCA: { boys: 2896, girls: 3144 },
      BCB: { boys: 1546, girls: 2351 },
      BCC: { boys: "Not Available", girls: "Not Available" },
      BCD: { boys: 1492, girls: 1614 },
      BCE: { boys: "Not Available", girls: "Not Available" },
      SC:  { boys: 5240, girls: 4728 },
      ST:  { boys: 4537, girls: "Not Available" },
    }
  },
  {
    branch: "ECM", branchFullName: "Electronics & Computer Engineering", exam: "ECET", year: 2024,
    cutoffs: {
      OC:  { boys: 1339, girls: 3518 },
      EWS: { boys: 3212, girls: "Not Available" },
      BCA: { boys: 3630, girls: "Not Available" },
      BCB: { boys: 1502, girls: "Not Available" },
      BCC: { boys: "Not Available", girls: "Not Available" },
      BCD: { boys: 1339, girls: 3284 },
      BCE: { boys: "Not Available", girls: "Not Available" },
      SC:  { boys: 4876, girls: "Not Available" },
      ST:  { boys: "Not Available", girls: "Not Available" },
    }
  },
  {
    branch: "AID", branchFullName: "CSE - AI & Data Science", exam: "ECET", year: 2024,
    cutoffs: {
      OC:  { boys: "Not Available", girls: "Not Available" },
      EWS: { boys: "Not Available", girls: "Not Available" },
      BCA: { boys: 1496, girls: 1610 },
      BCB: { boys: "Not Available", girls: 1460 },
      BCC: { boys: "Not Available", girls: "Not Available" },
      BCD: { boys: 1165, girls: 516  },
      BCE: { boys: "Not Available", girls: "Not Available" },
      SC:  { boys: 3749, girls: 3749 },
      ST:  { boys: "Not Available", girls: "Not Available" },
    }
  },
  {
    branch: "CAI", branchFullName: "CSE - AI & ML", exam: "ECET", year: 2024,
    cutoffs: {
      OC:  { boys: 4768, girls: 2570 },
      EWS: { boys: "Not Available", girls: "Not Available" },
      BCA: { boys: 1335, girls: "Not Available" },
      BCB: { boys: 1380, girls: "Not Available" },
      BCC: { boys: "Not Available", girls: "Not Available" },
      BCD: { boys: "Not Available", girls: 1009 },
      BCE: { boys: 2325, girls: "Not Available" },
      SC:  { boys: "Not Available", girls: 1790 },
      ST:  { boys: 839,  girls: "Not Available" },
    }
  },
  {
    branch: "CSC", branchFullName: "CSE - Cyber Security", exam: "ECET", year: 2024,
    cutoffs: {
      OC:  { boys: 765,  girls: "Not Available" },
      EWS: { boys: "Not Available", girls: "Not Available" },
      BCA: { boys: "Not Available", girls: 2704 },
      BCB: { boys: 2181, girls: "Not Available" },
      BCC: { boys: "Not Available", girls: "Not Available" },
      BCD: { boys: 1367, girls: 1179 },
      BCE: { boys: "Not Available", girls: "Not Available" },
      SC:  { boys: 1742, girls: 4280 },
      ST:  { boys: 3397, girls: "Not Available" },
    }
  },
  {
    branch: "CSD", branchFullName: "CSE - Data Science", exam: "ECET", year: 2024,
    cutoffs: {
      OC:  { boys: 762,  girls: 661  },
      EWS: { boys: "Not Available", girls: "Not Available" },
      BCA: { boys: 1032, girls: "Not Available" },
      BCB: { boys: "Not Available", girls: "Not Available" },
      BCC: { boys: "Not Available", girls: "Not Available" },
      BCD: { boys: 330,  girls: 762  },
      BCE: { boys: "Not Available", girls: 2882 },
      SC:  { boys: 2715, girls: "Not Available" },
      ST:  { boys: "Not Available", girls: "Not Available" },
    }
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 15000,
      family: 4,
    });
    console.log('✅ MongoDB Connected!');

    const db = mongoose.connection.db;

    // Seed eapcet_ranks (2024 + 2025)
    const eapcet = db.collection('eapcet_ranks');
    await eapcet.deleteMany({});
    await eapcet.insertMany([...eapcetData2025, ...eapcetData2024]);
    console.log(`✅ EAPCET ranks inserted: 2025 (${eapcetData2025.length}) + 2024 (${eapcetData2024.length}) branches`);

    // Seed ecet_ranks (2024)
    const ecet = db.collection('ecet_ranks');
    await ecet.deleteMany({});
    await ecet.insertMany(ecetData2024);
    console.log(`✅ ECET ranks inserted: 2024 (${ecetData2024.length}) branches`);

    await mongoose.connection.close();
    console.log('🎉 Database seeded successfully!');

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

seedDatabase();