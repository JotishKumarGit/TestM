import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image_1 from "/public/images-1.jpg";
import image_2 from "/public/images-2.jpg";

const BannerPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="bg-light py-5">
      <div className="container">
        <div
          id="bannerCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="row align-items-center">
                <div className="col-md-6" data-aos="fade-right">
                  <h1 className="display-4 fw-bold text-primary mb-4">
                    Welcome to <span className="text-dark">Your Brand</span>
                  </h1>
                  <p className="lead text-secondary mb-4">
                    Discover high-quality products at unbeatable prices. We bring your vision to life.
                  </p>
                  <a href="#shop" className="btn btn-primary btn-lg px-4 py-2">
                    Shop Now
                  </a>
                </div>
                <div className="col-md-6 text-center" data-aos="fade-left">
                  <img
                    src={image_1}
                    alt="Slide 1"
                    className="img-fluid rounded shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-6" data-aos="fade-right">
                  <h1 className="display-4 fw-bold text-success mb-4">
                    Premium Quality <span className="text-dark">Products</span>
                  </h1>
                  <p className="lead text-secondary mb-4">
                    Shop our latest collection of premium items that define excellence and value.
                  </p>
                  <a href="#shop" className="btn btn-success btn-lg px-4 py-2">
                    Explore
                  </a>
                </div>
                <div className="col-md-6 text-center" data-aos="fade-left">
                  <img
                    src={image_2}
                    alt="Slide 2"
                    className="img-fluid rounded shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-6" data-aos="fade-right">
                  <h1 className="display-4 fw-bold text-danger mb-4">
                    Fast & Reliable <span className="text-dark">Shipping</span>
                  </h1>
                  <p className="lead text-secondary mb-4">
                    Get your orders delivered swiftly and safely to your doorstep.
                  </p>
                  <a href="#shop" className="btn btn-danger btn-lg px-4 py-2">
                    Order Now
                  </a>
                </div>
                <div className="col-md-6 text-center" data-aos="fade-left">
                  <img
                    src={image_1}
                    alt="Slide 3"
                    className="img-fluid rounded shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
