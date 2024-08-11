import React from 'react';

const DoctorDashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Doctor Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Today's Appointments</h3>
          {/* List of today's appointments */}
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Patient Records</h3>
          {/* List of patient records */}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
