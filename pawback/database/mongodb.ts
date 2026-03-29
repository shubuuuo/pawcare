import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.ts";

if (!DB_URI) {
  throw new Error(
    "Please define the MONGODB_URI enviornment variable inside .env.<development/production>.local",
  );
}

const connectToDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI || "");
    console.log(`MongoDB connected: ${conn.connection.host}`);
    console.log(`MongoDB connected: ${NODE_ENV} mode`);
  } catch (error) {
    console.error("Error connecting to database: ", error);

    process.exit(1);
  }
};

export default connectToDatabase;
