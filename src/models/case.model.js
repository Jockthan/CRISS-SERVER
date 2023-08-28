import { Schema, model } from "mongoose";

const personSchema = new Schema({
  name: String,
  contact: String,
  address: String,
  statement: String
});

const suspectSchema = new Schema({
  height: String,
  eyeColor: String,
  dob: Date,
  uploadImage: String,
  additionalInformation: String,
  ...personSchema
});

const witnessSchema = new Schema({
  ...personSchema
});

const evidenceSchema = new Schema({
  description: String,
  evidenceFiles: [String],
  additionalInformation: String
});

const caseSchema = new Schema({
  caseReferenceNumber: String,
  date: Date,
  reportingOfficer: String,
  incidentType: String,
  incidentDescription: String,
  reportingParty: personSchema,
  victim: personSchema,
  suspect: suspectSchema,
  witnesses: [witnessSchema],
  evidence: evidenceSchema
});

const CaseInput = model("Case", caseSchema);

export default CaseInput;
