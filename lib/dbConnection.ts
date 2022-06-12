import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

export default async function dbConnection() {
  try {
    if (!MONGO_URI) throw new Error("MONGO_URI is not defined");
    await mongoose.connect(MONGO_URI);
  } catch (error) {
    console.error(error);
  }
}
