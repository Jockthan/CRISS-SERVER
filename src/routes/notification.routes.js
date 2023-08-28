import express from "express";
const router = express.Router();
 
import { addNotification, getAllNotification, getSingleNotification, UpdateNotification, deleteNotification} from "../controllers/notification.controller.js";

router.post('/', addNotification);

router.get('/', getAllNotification);

router.get('/:id', getSingleNotification);

router.post('/:id', UpdateNotification);

router.post('/:id', deleteNotification);

export default router;