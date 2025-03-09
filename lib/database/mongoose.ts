import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Declare a global variable for the Mongoose connection
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseConnection | undefined;
}

// Check if there's a cached connection in the global scope
const cached: MongooseConnection = global.mongoose || { conn: null, promise: null }; // Changed `let` to `const`

export const connectToDatabase = async () => {
  // If a connection already exists, return it
  if (cached.conn) return cached.conn;

  // Throw an error if the MongoDB URL is missing
  if (!MONGODB_URL) throw new Error('Missing MONGODB_URL');

  // If no promise exists, create a new connection
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: 'imaginify', // Specify the database name
      bufferCommands: false, // Disable command buffering
    });

  // Wait for the connection to be established
  cached.conn = await cached.promise;

  // Cache the connection in the global scope
  global.mongoose = cached;

  // Return the connection
  return cached.conn;
};