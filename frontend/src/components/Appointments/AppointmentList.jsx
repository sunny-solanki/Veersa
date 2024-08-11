import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAppointments } from '../../redux/slices/AppointmentSlice';

const AppointmentList = () => {
  const dispatch = useDispatch();
  const { appointments, status, error } = useSelector((state) => state.appointments);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAppointments());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <p>Loading appointments...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="appointment-list">
      <h2 className="text-2xl font-bold mb-4">My Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id} className="bg-white p-4 rounded-lg shadow mb-4">
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
            <p>Doctor: {appointment.doctor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
