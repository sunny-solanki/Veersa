import React from 'react';

const PatientDashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Patient Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">My Appointments</h3>
          {/* List of upcoming appointments */}
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Consultation History</h3>
          {/* List of past consultations */}
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
