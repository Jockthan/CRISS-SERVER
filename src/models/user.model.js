import { Schema, model } from "mongoose";

const userSchema = new Schema({
        name: {
        type: String,
        required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        rank:{
            type: String,
            required: true
        },
        station:{
            type: String,
            required: true
        },
        batchId:{
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type:String,
            enum: ["Officer","Admin", "Superadmin"],
            default: "Officer",
         }
});

export default model("User", userSchema)