import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row text-md-left">
          {/* Company Name */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3" data-aos="fade-up">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">MyCompany</h5>
            <p>
              Empowering your digital presence with modern and clean design solutions. Innovation meets creativity.
            </p>
          </div>

          {/* Services */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3" data-aos="fade-up" data-aos-delay="200">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Services</h5>
            <p><a href="/" className="text-light text-decoration-none">Home</a></p>
            <p><a href="/about" className="text-light text-decoration-none">About</a></p>
            <p><a href="/contact" className="text-light text-decoration-none">Contact</a></p>
          </div>

          {/* Address */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3" data-aos="fade-up" data-aos-delay="400">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Address</h5>
            <p><i className="fas fa-home mr-3"></i> 123 Street Name, City, India</p>
            <p><i className="fas fa-envelope mr-3"></i> info@mycompany.com</p>
            <p><i className="fas fa-phone mr-3"></i> +91 9876543210</p>
          </div>

          {/* Social Media */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3" data-aos="fade-up" data-aos-delay="600">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Follow Us</h5>
            <a href="#" className="text-light me-4 fs-5"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-light me-4 fs-5"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-light me-4 fs-5"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-light me-4 fs-5"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <hr className="mb-4 mt-4 text-light" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-center text-md-start">
              © {new Date().getFullYear()} <strong>MyCompany</strong>. All rights reserved.
            </p>
          </div>
          <div className="col-md-5 col-lg-4">
            <p className="text-center text-md-end">
              Designed by <strong>MyCompany Team</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
