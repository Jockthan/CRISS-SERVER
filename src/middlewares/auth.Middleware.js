import User from "../models/user.model.js";

export const checkAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user || user.role !== "Admin") {
      return res.status(403).json({ message: "Permission denied!" }).end();
    }

    next();
  } catch (error) {
    console.error("Error checking admin:", error);
    res.status(500).json({ error: "An error occurred while checking admin" }).end();
  }
};


// To use the middleware use 
import express from "express";
import { checkAdmin } from "./path-to-checkAdmin"; // Replace with the actual path

const router = express.Router();

router.get("/admin", checkAdmin, (req, res) => {
  // Only accessible to admins
  res.json({ message: "Admin route" });
});

export default router;
