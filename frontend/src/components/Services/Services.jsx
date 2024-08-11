import React from "react";

const Services= () => {
    const services = [
      { title: 'General Consultation', description: 'Speak with a doctor for general health concerns.' },
      { title: 'Specialist Consultation', description: 'Get expert advice from specialists in various fields.' },
      { title: 'Mental Health Support', description: 'Access to mental health professionals.' },
      { title: 'Emergency Services', description: '24/7 emergency services available.' },
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 bg-white rounded shadow">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

export default Services;