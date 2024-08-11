import React from 'react'
import Header from '../components/Header/Header';
import Services from '../components/Services/Services';
import Doctors from '../components/Doctors/Doctors';
import Testimonials from '../components/Testimonials/Testimonials';

const Homepage = () => {
    return (
        <div>
            <Header />
            <Services />
            <Doctors />
            <Testimonials />
        </div>
    )
}

export default Homepage
