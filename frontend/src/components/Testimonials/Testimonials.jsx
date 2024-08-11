import React from 'react'

const Testimonials = () => {

    const testimonials = [
        { name: 'John Doe', feedback: 'The service was excellent and the doctors were very professional.' },
        { name: 'Jane Smith', feedback: 'I was able to get the consultation I needed from the comfort of my home.' },
        { name: 'Michael Johnson', feedback: 'The telehealth platform was easy to use and very convenient.' },
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold">What Our Patients Say</h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-8 bg-white rounded shadow">
                            <p className="italic">"{testimonial.feedback}"</p>
                            <h3 className="mt-4 text-xl font-semibold">{testimonial.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
