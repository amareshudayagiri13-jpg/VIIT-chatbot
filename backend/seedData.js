const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dns = require('dns');

dns.setServers(['8.8.8.8', '8.8.4.4']);
dotenv.config();

const eapcetData = [
  {
    branch: "CIV", branchFullName: "Civil Engineering", year: 2025,
    cutoffs: {
      OC:  { boys: 59183,  girls: 65239  },
      EWS: { boys: 150628, girls: 150628 },
      BCA: { boys: 124453, girls: 128651 },
      BCB: { boys: 163469, girls: 140731 },
      BCC: { boys: 0,      girls: 0      },
      BCD: { boys: 89644,  girls: 144796 },
      BCE: { boys: 0,      girls: 0      },
      SC1: { boys: 177983, girls: 177983 },
      SC2: { boys: 179900, girls: 179900 },
      SC3: { boys: 179825, girls: 176575 },
      ST:  { boys: 179584, girls: 159088 },
    }
  },
  {
    branch: "EEE", branchFullName: "Electrical & Electronics Engineering", year: 2025,
    cutoffs: {
      OC:  { boys: 32278,  girls: 40316  },
      EWS: { boys: 75850,  girls: 97722  },
      BCA: { boys: 93737,  girls: 114722 },
      BCB: { boys: 83254,  girls: 126485 },
      BCC: { boys: 0,      girls: 54287  },
      BCD: { boys: 47180,  girls: 56936  },
      BCE: { boys: 74768,  girls: 0      },
      SC1: { boys: 0,      girls: 0      },
      SC2: { boys: 147327, girls: 0      },
      SC3: { boys: 171132, girls: 0      },
      ST:  { boys: 158305, girls: 153125 },
    }
  },
  {
    branch: "MEC", branchFullName: "Mechanical Engineering", year: 2025,
    cutoffs: {
      OC:  { boys: 59295,  girls: 79875  },
      EWS: { boys: 137811, girls: 132773 },
      BCA: { boys: 112261, girls: 178168 },
      BCB: { boys: 131983, girls: 144501 },
      BCC: { boys: 0,      girls: 0      },
      BCD: { boys: 75789,  girls: 133205 },
      BCE: { boys: 157170, girls: 0      },
      SC1: { boys: 161796, girls: 0      },
      SC2: { boys: 178518, girls: 119966 },
      SC3: { boys: 143231, girls: 153155 },
      ST:  { boys: 169852, girls: 171370 },
    }
  },
  {
    branch: "ECE", branchFullName: "Electronics & Communication Engineering", year: 2025,
    cutoffs: {
      OC:  { boys: 18413,  girls: 18413  },
      EWS: { boys: 46848,  girls: 61100  },
      BCA: { boys: 40850,  girls: 41979  },
      BCB: { boys: 60354,  girls: 52688  },
      BCC: { boys: 33150,  girls: 0      },
      BCD: { boys: 34227,  girls: 31115  },
      BCE: { boys: 177325, girls: 126326 },
      SC1: { boys: 75263,  girls: 166116 },
      SC2: { boys: 170185, girls: 152890 },
      SC3: { boys: 108629, girls: 114199 },
      ST:  { boys: 179040, girls: 169902 },
    }
  },
  {
    branch: "CSE", branchFullName: "Computer Science & Engineering", year: 2025,
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
    branch: "INF", branchFullName: "Information Technology", year: 2025,
    cutoffs: {
      OC:  { boys: 20497,  girls: 24438  },
      EWS: { boys: 42904,  girls: 39103  },
      BCA: { boys: 62227,  girls: 88376  },
      BCB: { boys: 69404,  girls: 79178  },
      BCC: { boys: 0,      girls: 48288  },
      BCD: { boys: 36060,  girls: 32686  },
      BCE: { boys: 118236, girls: 150376 },
      SC1: { boys: 145978, girls: 64777  },
      SC2: { boys: 174891, girls: 143420 },
      SC3: { boys: 165066, girls: 149425 },
      ST:  { boys: 167368, girls: 167368 },
    }
  },
  {
    branch: "ECM", branchFullName: "Electronics & Computer Engineering", year: 2025,
    cutoffs: {
      OC:  { boys: 28956,  girls: 28956  },
      EWS: { boys: 58361,  girls: 46954  },
      BCA: { boys: 105397, girls: 74356  },
      BCB: { boys: 54020,  girls: 57540  },
      BCC: { boys: 0,      girls: 0      },
      BCD: { boys: 34514,  girls: 45347  },
      BCE: { boys: 0,      girls: 165093 },
      SC1: { boys: 155391, girls: 0      },
      SC2: { boys: 0,      girls: 166363 },
      SC3: { boys: 140068, girls: 142078 },
      ST:  { boys: 146740, girls: 146740 },
    }
  },
  {
    branch: "AID", branchFullName: "CSE - AI & Data Science", year: 2025,
    cutoffs: {
      OC:  { boys: 17329,  girls: 13974  },
      EWS: { boys: 27994,  girls: 27740  },
      BCA: { boys: 36314,  girls: 37575  },
      BCB: { boys: 44899,  girls: 48313  },
      BCC: { boys: 0,      girls: 68202  },
      BCD: { boys: 26828,  girls: 27140  },
      BCE: { boys: 86506,  girls: 50768  },
      SC1: { boys: 148363, girls: 148363 },
      SC2: { boys: 148651, girls: 134367 },
      SC3: { boys: 72006,  girls: 101821 },
      ST:  { boys: 172805, girls: 133416 },
    }
  },
  {
    branch: "CAI", branchFullName: "CSE - AI & ML", year: 2025,
    cutoffs: {
      OC:  { boys: 17926,  girls: 12873  },
      EWS: { boys: 26072,  girls: 23818  },
      BCA: { boys: 34661,  girls: 30136  },
      BCB: { boys: 49321,  girls: 43493  },
      BCC: { boys: 96473,  girls: 0      },
      BCD: { boys: 28721,  girls: 28144  },
      BCE: { boys: 113620, girls: 104541 },
      SC1: { boys: 123855, girls: 123855 },
      SC2: { boys: 175805, girls: 169758 },
      SC3: { boys: 105130, girls: 155173 },
      ST:  { boys: 162192, girls: 162192 },
    }
  },
  {
    branch: "CSC", branchFullName: "CSE - Cyber Security", year: 2025,
    cutoffs: {
      OC:  { boys: 18251,  girls: 16003  },
      EWS: { boys: 31703,  girls: 24385  },
      BCA: { boys: 48707,  girls: 42986  },
      BCB: { boys: 63380,  girls: 61990  },
      BCC: { boys: 0,      girls: 0      },
      BCD: { boys: 28895,  girls: 29759  },
      BCE: { boys: 98239,  girls: 133219 },
      SC1: { boys: 59381,  girls: 59381  },
      SC2: { boys: 168778, girls: 176933 },
      SC3: { boys: 149006, girls: 93568  },
      ST:  { boys: 152621, girls: 139141 },
    }
  },
  {
    branch: "CSD", branchFullName: "CSE - Data Science", year: 2025,
    cutoffs: {
      OC:  { boys: 12473,  girls: 15469  },
      EWS: { boys: 35814,  girls: 29736  },
      BCA: { boys: 43189,  girls: 30793  },
      BCB: { boys: 59434,  girls: 60308  },
      BCC: { boys: 87754,  girls: 0      },
      BCD: { boys: 26539,  girls: 24992  },
      BCE: { boys: 92665,  girls: 72125  },
      SC1: { boys: 148145, girls: 148145 },
      SC2: { boys: 180074, girls: 157113 },
      SC3: { boys: 74418,  girls: 91604  },
      ST:  { boys: 146299, girls: 81667  },
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

    const eapcet = db.collection('eapcet_ranks');
    await eapcet.deleteMany({});
    await eapcet.insertMany(eapcetData);
    console.log(`✅ EAPCET 2025 ranks inserted: ${eapcetData.length} branches`);

    await mongoose.connection.close();
    console.log('🎉 Database seeded successfully!');

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

seedDatabase();