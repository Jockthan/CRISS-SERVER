import { Schema, model } from "mongoose";

const rankOptions = [
  "Constable",
  "Corporal",
  "Sergeant",
  "Sergeant Major (SM)",
  "Inspector of Police (IP)",
  "Assistant Superintendent of Police (ASP)",
  "Deputy Superintendent of Police (DSP)",
  "Superintendent of Police",
  "Chief Superintendent of Police",
  "Assistant Commissioner of Police",
  "Deputy Commissioner of Police",
  "Commissioner of Police",
  "Assistant Inspector General of Police",
  "Deputy Inspector General of Police",
  "Inspector General of Police"
];

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  rank: {
    type: String,
    enum: rankOptions, // Use the predefined array of options
    required: true,
  },
  station: {
    type: String,
    required: true,
  },
  batchId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Officer", "Admin", "Superadmin"],
    default: "Officer",
  },
});

export default model("User", userSchema);
