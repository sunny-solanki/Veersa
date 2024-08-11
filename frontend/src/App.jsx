import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import DoctorDashboard from './components/Dashboard/DoctorDashboard';
import PatientDashboard from './components/Dashboard/PatientDashboard';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

