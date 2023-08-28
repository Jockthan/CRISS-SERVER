import express from "express";
import CaseInput from "../models/case.model.js";

const router = express.Router();

// Create a new case input
export const createCase = async (req, res) => {
  try {
    const newCase = await CaseInput.create(req.body);
    res.status(201).json(newCase);
  } catch (error) {
    res.status(400).json({ error: error.message });
  } 
};

// Get all case inputs
export const getAllCases = async (req, res) => {
  try {
    const cases = await CaseInput.find();
    res.json(cases);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } 
};

// Get a single case input
export const getSingleCase = async (req, res) => {
  try {
    const singleCase = await CaseInput.findById(req.params.id);
    if (!singleCase) {
      return res.status(404).json({ message: "Case not found" });
    }
    res.json(singleCase);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a case input by ID
export const updateCase = async (req, res) => {
  try {
    const updatedCase = await CaseInput.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCase) {
      return res.status(404).json({ message: "Case not found" });
    }
    res.json(updatedCase);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Delete a case input
export const delCase = async (req, res) => {
  try {
    const deletedCase = await CaseInput.findByIdAndRemove(req.params.id);
    if (!deletedCase) {
      return res.status(404).json({ message: "Case not found" });
    }
    res.json({ message: "Case deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
