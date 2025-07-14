import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image_1 from '/public/images-1.jpg';
import image_2 from '/public/images-2.jpg';
import BannerPage from './Baner';
import Product from './Product';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Services from './Services';
import Popular from './Popular';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="about-page bg-light py-5">
      <BannerPage />
      <div className="container">
        <h2 className="text-center fw-bold mb-5" data-aos="fade-down">About Us</h2>

        <div className="row align-items-center mb-5" data-aos="fade-right">
          <div className="col-md-6">
            <img
              src={image_1}
              className="img-fluid rounded shadow"
              alt="Our Team"
            />
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <h4 className="fw-bold text-primary">Who We Are</h4>
            <p className="text-muted">
              We are a team of passionate individuals dedicated to delivering top-notch digital solutions.
              Our mission is to create impactful products and provide exceptional customer experiences.
            </p>
          </div>
        </div>

        <div className="row align-items-center flex-md-row-reverse mb-5" data-aos="fade-left">
          <div className="col-md-6">
            <img
              src={image_2}
              className="img-fluid rounded shadow"
              alt="Our Mission"
            />
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <h4 className="fw-bold text-primary">Our Mission</h4>
            <p className="text-muted">
              Our goal is to innovate and lead in technology-driven solutions that empower businesses and individuals.
              We believe in integrity, creativity, and excellence.
            </p>
          </div>
        </div>

        <div className="row text-center" data-aos="zoom-in">
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-white shadow rounded">
              <h1 className="text-primary">10+</h1>
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
        <Popular />
        <Services />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
