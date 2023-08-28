import express from "express";
const router = express.Router();

import {getAllUser, getSingleUser, addUser, loginUser, udpateUser, deleteUser} from "../controllers/user.controller.js";

router.get('/', getAllUser);

router.get('/:UserId', getSingleUser);

router.post('/', addUser);

router.post('/login', loginUser);

router.patch('/:UserId', udpateUser);

router.delete('/:UserId', deleteUser);

export default router;