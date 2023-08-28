import express from "express";
const router = express.Router();

import {createCase,getAllCases, getSingleCase, updateCase, delCase } from "../controllers/case.controller.js";


router.post('/', createCase);

router.get('/', getAllCases);

router.get('/:id', getSingleCase);

router.post('/:id', updateCase);

router.post('/:id', delCase);

export default router;