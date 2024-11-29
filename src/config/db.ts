import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ismayiloff522:ramazan522@divacademy.ckr2u.mongodb.net/medium?retryWrites=true&w=majority&appName=DivAcadem");
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed", error);
  }
};

export default connectDB