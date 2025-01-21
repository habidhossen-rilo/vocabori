import { env } from "@/data/env/server";
import mongoose from "mongoose";

const dbUrl = env.MONGODB_URL;

export const dbConnect = async () => {
  try {
    await mongoose.connect(dbUrl as string);
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
  }
};
// dbConnect();
