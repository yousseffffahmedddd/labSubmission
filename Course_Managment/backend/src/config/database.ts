import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.Mongo_URI || "mongodb+srv://ya8111034_db_user:2mrMb8kholQ7yHzI@cluster0.gzeomow.mongodb.net/?appName=Cluster0/lab9db";

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
