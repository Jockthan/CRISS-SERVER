import { Schema, model } from "mongoose";

const caseSchema = new Schema({
  caseReferenceNumber: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  reportingOfficer: {
    type: String,
    required: true,
  },
  incidentType: {
    type: String,
    required: true,
  },
  incidentDescription: {
    type: String,
    required: true,
  },
  reportingParty: {
    name: String,
    contact: String,
    address: String,
    statement: String,
  },
  victim: {
    name: String,
    contact: String,
    address: String,
    statement: String,
  },
  suspect: {
    name: String,
    contact: String,
    address: String,
    height: String,
    eyeColor: String,
    dob: Date,
    uploadImage: String, // You may want to store the image URL or reference here
    additionalInformation: String,
  },
  witnesses: [
    {
      name: String,
      contact: String,
      address: String,
      statement: String,
    },
  ],
  evidence: {
    description: String,
    evidenceFiles: [String], // You may want to store multiple file URLs or references
    additionalInformation: String,
  },
});

export default model("Case", caseSchema);
