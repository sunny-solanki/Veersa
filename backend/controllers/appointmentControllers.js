import Appointment from '../models/Appointment.js';

// Create an appointment
export const createAppointment = async (req, res) => {
  const { doctor, date, symptoms } = req.body;

  try {
    const appointment = await Appointment.create({
      patient: req.user.id,
      doctor,
      date,
      symptoms,
    });

    res.status(201).json({ success: true, appointment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all appointments for a patient
export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ patient: req.user.id }).populate('doctor', 'name');

    res.status(200).json({ success: true, appointments });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a specific appointment
export const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id).populate('doctor', 'name');

    if (!appointment) {
      return res.status(404).json({ success: false, error: 'Appointment not found' });
    }

    res.status(200).json({ success: true, appointment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update an appointment
export const updateAppointment = async (req, res) => {
  const { date, symptoms, status } = req.body;

  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ success: false, error: 'Appointment not found' });
    }

    if (appointment.patient.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, error: 'Not authorized to update this appointment' });
    }

    appointment.date = date || appointment.date;
    appointment.symptoms = symptoms || appointment.symptoms;
    appointment.status = status || appointment.status;

    await appointment.save();

    res.status(200).json({ success: true, appointment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Cancel an appointment
export const cancelAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ success: false, error: 'Appointment not found' });
    }

    if (appointment.patient.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, error: 'Not authorized to cancel this appointment' });
    }

    await appointment.remove();

    res.status(200).json({ success: true, message: 'Appointment canceled' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
