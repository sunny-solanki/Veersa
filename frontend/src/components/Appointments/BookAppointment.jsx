import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookAppointment } from '../../redux/slices/AppointmentSlice';

const BookAppointment = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [doctor, setDoctor] = useState('');
  const dispatch = useDispatch();

  const handleBook = () => {
    dispatch(bookAppointment({ date, time, doctor }));
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Book Appointment</h2>
      <form onSubmit={handleBook}>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-semibold">Date</label>
          <input
            type="date"
            id="date"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-semibold">Time</label>
          <input
            type="time"
            id="time"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="doctor" className="block text-sm font-semibold">Doctor</label>
          <input
            type="text"
            id="doctor"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
