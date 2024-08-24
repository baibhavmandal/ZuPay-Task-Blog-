import mongoose from "mongoose";

async function connectDB(uri) {
  await mongoose.connect(uri);
}

export default connectDB;
