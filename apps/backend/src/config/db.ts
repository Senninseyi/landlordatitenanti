import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  try {
    const dbName = 'landlordatitenant';
    const uri =
      (process.env.MONGO_URI as string) ||
      `mongodb://localhost:27017/${dbName}`;
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

export default connectDB;
