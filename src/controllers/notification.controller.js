import express from "express";
import Notification from "../models/notification.model.js";

const router = express.Router();

// Create a new notification
export const addNotification = async (req, res) => {
  try {
    const newNotification = await Notification.create(req.body);
    res.status(201).json(newNotification);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

router.post("/", async (req, res) => {
});

// Get all notifications
export const getAllNotification = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
router.get("/", async (req, res) => {
});

// Get a single notification by ID
export const getSingleNotification = async (req, res) => {
  try {
    const singleNotification = await Notification.findById(req.params.id);
    if (!singleNotification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    res.json(singleNotification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

router.get("/:id", async (req, res) => {
});

// Update a notification by ID
export const UpdateNotification = async (req, res) => {
  try {
    const updatedNotification = await Notification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedNotification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    res.json(updatedNotification);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


// Delete a notification
export const deleteNotification = async (req, res) => {
  try {
    const deletedNotification = await Notification.findByIdAndRemove(req.params.id);
    if (!deletedNotification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    res.json({ message: "Notification deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
router.delete("/:id", async (req, res) => {
});