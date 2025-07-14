import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image_1 from "/images-1.jpg";
import image_2 from "/images-2.jpg";

const products = [
    {
        id: 1,
        title: "Stylish Headphones",
        price: "$59.99",
        description: "High-quality wireless headphones with noise cancellation.",
        image: image_1,
    },
    {
        id: 2,
        title: "Smart Watch",
        price: "$129.99",
        description: "Water-resistant smartwatch with fitness tracking features.",
        image: image_2,
    },
    {
        id: 3,
        title: "Portable Speaker",
        price: "$39.99",
        description: "Compact speaker with deep bass and long battery life.",
        image: image_1,
    },
    {
        id: 1,
        title: "Stylish Headphones",
        price: "$59.99",
        description: "High-quality wireless headphones with noise cancellation.",
        image: image_1,
    },
    {
        id: 2,
        title: "Smart Watch",
        price: "$129.99",
        description: "Water-resistant smartwatch with fitness tracking features.",
        image: image_2,
    },
    {
        id: 3,
        title: "Portable Speaker",
        price: "$39.99",
        description: "Compact speaker with deep bass and long battery life.",
        image: image_1,
    },
];

const Product = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="container py-5 bg-light">
            <h2 className="text-center mb-5 fw-bold" data-aos="fade-down">
                Featured Products
            </h2>
            <div className="row g-4">
                {products.map((product) => (
                    <div
                        className="col-md-4"
                        key={product.id}
                        data-aos="fade-up"
                        data-aos-delay={product.id * 100}
                    >
                        <div className="card border-0 shadow-sm h-100 rounded-4">
                            <img
                                src={product.image}
                                className="card-img-top rounded-top-4"
                                alt={product.title}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold">{product.title}</h5>
                                <p className="text-muted">{product.description}</p>
                                <h6 className="text-primary">{product.price}</h6>
                                <button className="btn btn-outline-primary mt-2">
                                   Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
