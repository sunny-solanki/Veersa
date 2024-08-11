import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        async function fetchDoctors() {
            const response = await axios.get('/api/doctors');
            setDoctors(response.data);
        }

        fetchDoctors();
    }, []);
    
    return (
        <section className="py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold">Meet Our Doctors</h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {doctors.map((doctor) => (
                        <div key={doctor.id} className="p-8 bg-white rounded shadow">
                            <img src={doctor.profileImage} alt={doctor.name} className="rounded-full w-32 mx-auto" />
                            <h3 className="mt-4 text-xl font-semibold">{doctor.name}</h3>
                            <p className="text-gray-600">{doctor.specialization}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Doctors
