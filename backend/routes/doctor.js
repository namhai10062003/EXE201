import express from 'express';
import { createDoctor, getAllDoctors, getDoctorById } from '../controllers/doctorController.js';
const router = express.Router();

// Get all rooms
router.get('/',  getAllDoctors);

// Create a new room
router.post('/create',createDoctor);

// You might also want to add a route to render the form for creating a new room
router.get('/:id', getDoctorById)

export default router;