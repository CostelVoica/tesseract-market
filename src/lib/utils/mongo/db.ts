import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI

let client
let clientPromise: Promise<MongoClient>

if (!process.env.MONGODB_URI) {
    throw new Error('Please add your MongoDB URI to the .env.local file')
}

let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise: Promise<MongoClient>
}

if (process.env.NODE_ENV === 'development') {
    if (!globalWithMongo._mongoClientPromise) {
        client = new MongoClient(uri!)
        globalWithMongo._mongoClientPromise = client.connect()
    }
    clientPromise = globalWithMongo._mongoClientPromise
    console.log('connected to clientPromise dev mode in db.ts')
} else {
    client = new MongoClient(uri!)
    clientPromise = client.connect()
    console.log('connected to clientPromise nondev mode in db.ts')
}

export default clientPromise

// ========================================================

// const uri = process.env.MONGODB_URI;
// const options = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// };

// let client;
// let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error('Please add your MongoDB URI to the .env.local file');
// }

// if (process.env.NODE_ENV === 'development') {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;
