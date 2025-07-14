import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image_1 from '/images-1.jpg';
import image_2 from '/images-2.jpg';

const services = [
    {
        icon: image_1,
        title: 'Web Development',
        description: 'We build responsive, modern websites tailored to your needs.',
    },
    {
        icon: image_2,
        title: 'App Development',
        description: 'We craft mobile apps with sleek designs and fast performance.',
    },
    {
        icon: image_1,
        title: 'Digital Marketing',
        description: 'Boost your business with SEO, PPC, and content strategies.',
    },
    {
        icon: image_2,
        title: 'Graphic Design',
        description: 'Custom logos, branding, and visuals to elevate your identity.',
    },
];

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <div className="container py-5">
            <div className="text-center mb-5" data-aos="fade-down">
                <h2 className="fw-bold">Our Services</h2>
                <p className="text-muted">What we offer to help you grow</p>
            </div>

            <div className="row g-4">
                {services.map((service, index) => (
                    <div className="col-md-6 col-lg-3" key={index} data-aos="zoom-in">
                        <div className="card h-100 shadow-sm service-card p-4 text-center border-0">
                            <div className="icon-container mb-3">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="img-fluid"
                                    style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%' }}
                                />
                            </div>
                            <h5 className="fw-semibold">{service.title}</h5>
                            <p className="text-muted">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
