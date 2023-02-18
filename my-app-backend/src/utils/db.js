import mongoose from "mongoose";
import config from "./config.js";

const connectDb = async () => {
  try {
    mongoose.connect(config.DB || "");
    console.log(`Connected to Mongodb succesfullt`);
  } catch (err) {
    console.log(err);
  }
};

export default connectDb;
