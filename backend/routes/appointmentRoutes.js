import express from 'express';
import { createAppointment, getAppointments, getAppointmentById, updateAppointment, cancelAppointment } from '../controllers/appointmentControllers.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createAppointment);
router.get('/', protect, getAppointments);
router.get('/:id', protect, getAppointmentById);
router.put('/:id', protect, updateAppointment);
router.delete('/:id', protect, cancelAppointment);

export default router;
