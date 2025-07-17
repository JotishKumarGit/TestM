import React from 'react';


const BannerPage = () => {
  const images = [
    { src: 'coffee-mugs.webp', alt: 'Personalized Metal Photo Frames & Custom Nameplates' },
    { src: 'fridge-magnets.jpg', alt: 'Customized Coffee Mugs, Keychains & Tea Coasters for Every Occasion' },
    { src: 'keychain.webp', alt: 'Unique and Personalized Gifts: Metal Frames, Mugs, and More' },
  ];

  return (
    <div className="container-fluid p-0 m-0">
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000" >
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img className="d-block w-100" src={image.src} alt={image.alt} style={{ height: '85vh', objectFit: 'cover' }} />
              <div className="carousel-caption d-none d-md-block">
                <h3 className='text-info'>{image.alt}</h3>
                <p className='text-warning fw-bold'>Celebrate life’s precious moments with our elegant personalized metal photo frames. Perfect for home décor, office spaces, or as a thoughtful gift. {image.alt}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default BannerPage;
