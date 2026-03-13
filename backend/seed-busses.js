const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://amareshudayagiri13_db_user:2in5ZVoSbpqr5rIV@viit-chatbot-cluster.lbou4yz.mongodb.net/viitchatbot';
const dbName = 'viitchatbot';
const collectionName = 'buses';

const busFares = [
  { boardingPoint: "ANAKAPALLI", busFee: 32600 },
  { boardingPoint: "CAR SHED", busFee: 32600 },
  { boardingPoint: "HANUMMANTHWAKA", busFee: 32600 },
  { boardingPoint: "ISKATOTHIA", busFee: 32600 },
  { boardingPoint: "MADDILAPALEM", busFee: 32600 },
  { boardingPoint: "GBRUDWAR", busFee: 32600 },
  { boardingPoint: "BENADU", busFee: 32600 },
  { boardingPoint: "M.V.P COLONY", busFee: 32600 },
  { boardingPoint: "JAGADHAMBA", busFee: 32600 },
  { boardingPoint: "R.T.C COMPLEX", busFee: 32600 },
  { boardingPoint: "SEETHAMADHARA", busFee: 32600 },
  { boardingPoint: "N.T.P.C", busFee: 32600 },
  { boardingPoint: "5th TOWN PS", busFee: 26700 },
  { boardingPoint: "B.C.ROAD", busFee: 26700 },
  { boardingPoint: "BIRLA JUNCTION", busFee: 26700 },
  { boardingPoint: "GOPALAPATHAM", busFee: 26700 },
  { boardingPoint: "KANCHARA PALEM", busFee: 26700 },
  { boardingPoint: "MURALI NAGAR", busFee: 26700 },
  { boardingPoint: "PEDHAGANTYADA", busFee: 26700 },
  { boardingPoint: "PUJNAB HOTEL", busFee: 26700 },
  { boardingPoint: "LENKALAPALEM", busFee: 26700 },
  { boardingPoint: "STEEL PLANT SEC 1 TO 11", busFee: 26700 },
  { boardingPoint: "RBJ JUNCTION", busFee: 26700 },
  { boardingPoint: "NAD JUNCTION", busFee: 26700 },
  { boardingPoint: "BAJI JUNCTION", busFee: 26700 },
  { boardingPoint: "PENDURTHI", busFee: 30400 },
  { boardingPoint: "4th TOWN PS", busFee: 30400 },
  { boardingPoint: "SCINDYA", busFee: 30400 },
  { boardingPoint: "MAKAPURAM", busFee: 30400 },
  { boardingPoint: "PARAWADA", busFee: 30400 },
  { boardingPoint: "GAJUWAKA DEPO", busFee: 25000 },
  { boardingPoint: "KAKKI NAGAR", busFee: 25000 },
  { boardingPoint: "AIRPORT", busFee: 25000 },
  { boardingPoint: "DESIPATRI PALEM", busFee: 29700 },
  { boardingPoint: "CHINNA MUSHRIVADA", busFee: 29700 },
  { boardingPoint: "SUJATHNA NAGAR", busFee: 29700 },
  { boardingPoint: "KRISHNARAJ PURAM", busFee: 29700 },
  { boardingPoint: "SHIMACHALAM", busFee: 29700 },
  { boardingPoint: "AUTOGAR", busFee: 21000 },
  { boardingPoint: "B.H.P.V", busFee: 21000 },
  { boardingPoint: "C.D.R HOSPITAL", busFee: 21000 },
  { boardingPoint: "KURMAM PALEM", busFee: 21000 },
  { boardingPoint: "NAITHAYA PALEM", busFee: 21000 },
  { boardingPoint: "OLD GAJUWAKA", busFee: 21000 },
  { boardingPoint: "PANTHULAGARI MEDA", busFee: 21000 },
  { boardingPoint: "RK. HOSPITAL", busFee: 21000 },
  { boardingPoint: "SRINAGAR", busFee: 21000 },
  { boardingPoint: "VADLAPUDI", busFee: 21000 },
  { boardingPoint: "VEPAGUNTA", busFee: 28700 },
  { boardingPoint: "SRIHARIBURAM", busFee: 28700 },
  { boardingPoint: "NAIDUTOTHA", busFee: 28700 },
  { boardingPoint: "AKKAYPALEM", busFee: 28700 },
  { boardingPoint: "TATECHATLAPALEM", busFee: 28700 },
  { boardingPoint: "DONDAVARTHI", busFee: 28700 },
  { boardingPoint: "RLV-NEW COLONY", busFee: 28700 },
  { boardingPoint: "SRISAPALLI", busFee: 28700 },
  { boardingPoint: "CORAMANDAL GATE", busFee: 28700 },
  { boardingPoint: "SHEELANGAR", busFee: 19000 },
  { boardingPoint: "RAJIV NAGAR", busFee: 19000 },
  { boardingPoint: "FAKEERTAKIYA", busFee: 19000 },
];

async function seedDatabase() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    await collection.deleteMany({});
    console.log('Cleared existing bus fare data');
    const result = await collection.insertMany(busFares);
    console.log(`Inserted ${result.insertedCount} bus fare records successfully!`);
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

seedDatabase();