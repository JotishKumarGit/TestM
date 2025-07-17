import React from "react";
import image_1 from '/img1.webp';

const FridgeMagnets = () => {

  const product = {
    image:  image_1, 
    title: "Fridge Magnets",
    description:
      "Elegant and functional, tea coasters protect your surfaces from spills and stains while adding a touch of style to your table setting. Perfect for any occasion, they combine practicality with design.",
    price: "$299.99",
    rating: "4.5/5",
    availability: "In Stock",
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* Left side: Product image */}
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        {/* Right side: Product details */}
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p className="text-muted">{product.price}</p>
          <p>{product.description}</p>
          <ul className="list-unstyled">
            <li><strong>Rating:</strong> {product.rating}</li>
            <li><strong>Availability:</strong> {product.availability}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FridgeMagnets;
