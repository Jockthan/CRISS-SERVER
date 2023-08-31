import dotenv from "dotenv";
dotenv.config({ path: '../../.env' });
import userModel from "../models/user.model.js";
import { connectDB } from "../config/db.js";
import bcrypt from "bcrypt"; 

connectDB(process.env.MONGO_URI);

const admin = new userModel({
  name: "Jonah Jockthan",
  email: "criss@gmail.com",
  password: "1234abcde",
  role: "Superadmin"
});

const encryptedPassword = async () => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(admin.password, saltRounds);
    admin.password = hashedPassword;

    console.log(admin);
    await admin.save();

    console.log("Admin Created");
  } catch (err) {
    console.error(err);
  }
};

encryptedPassword();
