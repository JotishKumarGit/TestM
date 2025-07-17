import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image_1 from '/images-1.jpg';
import image_2 from '/images-2.jpg';
import Product from './Product';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Services from './Services';
import Baner from './Baner';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const images = [
    { src: image_1, alt: 'First slide' },
    { src: image_2, alt: 'Second slide' },
    { src: image_1, alt: 'Third slide' },
  ];


  // for send data on whatsapp
  const [data, setData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Craft the whatsapp url
    const phone = '+917827710029';
    const text = `name : ${data.name}%OAEmail: ${data.email}%OAMessage: ${data.message}`;
    const WaLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    // open whatsapp in a new tab
    window.open(WaLink, "_blank");
    console.log("data is passed to WhatsApp");
  }


  return (
    <>
      <div className="container-fluid">
        <Baner />
      </ div>
      {/* About us */}
      <div className="about-page bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" data-aos="fade-down">About Us</h2>

          <div className="row align-items-center mb-5" data-aos="fade-right">
            <div className="col-md-6">
              <img src={image_1} className="img-fluid rounded shadow" alt="Our Team" />
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <h4 className="fw-bold text-primary">Who We Are</h4>
              <p className="text-muted">We are the best Laser cutting and engraving also Sublimation printing experts. Since 14 of experience having good knowledge of market and products also materials.</p>
              <ul className="list-unstyled">
                <li className='text-muted'>We Are Exporter </li>
                <li className='text-muted'>We Are Supplier</li>
                <li className='text-muted'> We Are Manufacture</li>
              </ul>
            </div>
          </div>
          <div className="row text-center py-5" data-aos="zoom-in">
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white shadow rounded">
                <h1 className="text-primary">14+</h1>
                <p className="text-muted">Years of Experience</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white shadow rounded">
                <h1 className="text-primary">50+</h1>
                <p className="text-muted">Projects Delivered</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white shadow rounded">
                <h1 className="text-primary">100%</h1>
                <p className="text-muted">Client Satisfaction</p>
              </div>
            </div>
          </div>
          <Product />
          {/* <Popular /> */}
          <Services />
          <Testimonials />
          <div className='container-fluid'>
            <div className="container shadow-lg p-5 justify-content-center rounded" data-aos="fade-up">
              <div className="row g-4 ">
                {/* Left Side: Map */}
                <div className="col-md-6 mt-5">
                  <div className="shadow rounded overflow-hidden">
                    <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.7921574208326!2d73.81588517423901!3d18.583406767253642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8c8283b9393%3A0xc4b048275a33adbf!2s205%2C%20Vidya%20Nagar%20Ln%202%2C%20Vidya%20Nagar%2C%20New%20Sangavi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411027!5e0!3m2!1sen!2sin!4v1752708417482!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, minHeight: '400px' }} allowFullScreen="" loading="lazy"></iframe>

                  </div>
                </div>
                {/* Right Side: Contact Form */}
                <div className="col-md-6">
                  <div className="card p-4 shadow-lg">
                    <h3 className="text-primary fw-bold mb-3">Get in Touch</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-semibold">Name</label>
                        <input type="text" name='name' value={data.name} className="form-control" placeholder="Your name" onChange={handleChange} required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-semibold">Email</label>
                        <input type="email" name='email' value={data.email} className="form-control" placeholder="name@example.com" onChange={handleChange} required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message" className="form-label fw-semibold">Message</label>
                        <textarea className="form-control" value={data.message} name='message' rows="4" placeholder="Your message..." onChange={handleChange} required></textarea>
                      </div>
                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
