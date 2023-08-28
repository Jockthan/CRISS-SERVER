import dotenv from "dotenv"
dotenv.config({path: '../../.env'})
import userModel from "../models/user.model.js";
import { createHash } from "node:crypto";
import { connectDB } from "../config/db.js";
import userModel from "../models/user.model.js";

connectDB(process.env.MONGO_URI);

const admin = new userModel({
    name: "Jonah Jockthan",
    email: "criss@gmail.com",
    password: "1234abcde",
    role: "Superadmin"
})

const encryptedPassword = async() => {
    const hash = createHash("sha256").update(admin.password).digest("base64");
    admin.password = hash;
    console.log(admin);
    await admin.save().then(user => {
        console.log("Admin Created");
    }).catch(err => {
        console.log(err)
    })
}
encryptedPassword()