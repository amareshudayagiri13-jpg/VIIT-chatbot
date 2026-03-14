const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dns = require('dns');

dns.setServers(['8.8.8.8', '8.8.4.4']);
dotenv.config();

const busPoints = [
  { boardingPoint: "ANAKAPALLI" },
  { boardingPoint: "CAR SHED" },
  { boardingPoint: "HANUMMANTHWAKA" },
  { boardingPoint: "ISKATOTHIA" },
  { boardingPoint: "MADDILAPALEM" },
  { boardingPoint: "GBRUDWAR" },
  { boardingPoint: "BENADU" },
  { boardingPoint: "M.V.P COLONY" },
  { boardingPoint: "JAGADHAMBA" },
  { boardingPoint: "R.T.C COMPLEX" },
  { boardingPoint: "SEETHAMADHARA" },
  { boardingPoint: "N.T.P.C" },
  { boardingPoint: "5th TOWN PS" },
  { boardingPoint: "B.C.ROAD" },
  { boardingPoint: "BIRLA JUNCTION" },
  { boardingPoint: "GOPALAPATHAM" },
  { boardingPoint: "KANCHARA PALEM" },
  { boardingPoint: "MURALI NAGAR" },
  { boardingPoint: "PEDHAGANTYADA" },
  { boardingPoint: "PUJNAB HOTEL" },
  { boardingPoint: "LENKALAPALEM" },
  { boardingPoint: "STEEL PLANT SEC 1 TO 11" },
  { boardingPoint: "RBJ JUNCTION" },
  { boardingPoint: "NAD JUNCTION" },
  { boardingPoint: "BAJI JUNCTION" },
  { boardingPoint: "PENDURTHI" },
  { boardingPoint: "4th TOWN PS" },
  { boardingPoint: "SCINDYA" },
  { boardingPoint: "MAKAPURAM" },
  { boardingPoint: "PARAWADA" },
  { boardingPoint: "GAJUWAKA DEPO" },
  { boardingPoint: "KAKKI NAGAR" },
  { boardingPoint: "AIRPORT" },
  { boardingPoint: "DESIPATRI PALEM" },
  { boardingPoint: "CHINNA MUSHRIVADA" },
  { boardingPoint: "SUJATHNA NAGAR" },
  { boardingPoint: "KRISHNARAJ PURAM" },
  { boardingPoint: "SHIMACHALAM" },
  { boardingPoint: "AUTOGAR" },
  { boardingPoint: "B.H.P.V" },
  { boardingPoint: "C.D.R HOSPITAL" },
  { boardingPoint: "KURMAM PALEM" },
  { boardingPoint: "NAITHAYA PALEM" },
  { boardingPoint: "OLD GAJUWAKA" },
  { boardingPoint: "PANTHULAGARI MEDA" },
  { boardingPoint: "RK. HOSPITAL" },
  { boardingPoint: "SRINAGAR" },
  { boardingPoint: "VADLAPUDI" },
  { boardingPoint: "VEPAGUNTA" },
  { boardingPoint: "SRIHARIBURAM" },
  { boardingPoint: "NAIDUTOTHA" },
  { boardingPoint: "AKKAYPALEM" },
  { boardingPoint: "TATECHATLAPALEM" },
  { boardingPoint: "DONDAVARTHI" },
  { boardingPoint: "RLV-NEW COLONY" },
  { boardingPoint: "SRISAPALLI" },
  { boardingPoint: "CORAMANDAL GATE" },
  { boardingPoint: "SHEELANGAR" },
  { boardingPoint: "RAJIV NAGAR" },
  { boardingPoint: "FAKEERTAKIYA" },
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 15000,
      family: 4,
    });
    console.log('✅ MongoDB Connected!');

    const db = mongoose.connection.db;

    const buses = db.collection('buses');
    await buses.deleteMany({});
    await buses.insertMany(busPoints);
    console.log(`✅ Bus boarding points inserted: ${busPoints.length} points`);

    await mongoose.connection.close();
    console.log('🎉 Database seeded successfully!');

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

seedDatabase();