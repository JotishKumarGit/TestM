import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Modal, Button, Form } from 'react-bootstrap';


import image_2 from "/images-2.jpg";
import TeaCoasters from '../Details/TeaCoasters';
import CoffeeMugs from '../Details/CoffeeMugs';
import CustomizeNameplates from '../Details/CustomizeNameplates';
import FridgeMagnets from '../Details/FridgeMagnets';
import Keychain from '../Details/Keychain';
import MetalPhotoFrames from '../Details/MetalPhotoFrames';

const products = [
    {
        id: 1,
        title: "Tea Coasters",
        description: "These elegant tea coasters protect surfaces while adding a touch of style to your home decor.",
        image: 'teaCoaster_img.webp',
        component: <TeaCoasters />
    },
    {
        id: 2,
        title: "Fridge Magnets",
        description: "Brighten up your space with these fun and functional fridge magnets that add personality to any surface.",
        image: 'fridge-magnets.jpg',
        component: <FridgeMagnets />
    },
    {
        id: 3,
        title: "Keychain",
        description: "Compact and practical, this keychain keeps your keys organized while showcasing a touch of style.",
        image: 'keychain.webp',
        component: <Keychain />
    },
    {
        id: 4,
        title: "Coffee Mugs",
        description: "Sip in style with these charming coffee mugs, perfect for enjoying your favorite brew.",
        image: 'coffee-mugs.webp',
        component: <CoffeeMugs />
    },
    {
        id: 5,
        title: "Customize Nameplates",
        description: "Personalize your space with custom nameplates that add a unique and welcoming touch to any room.",
        image: 'customize-nameplates.webp',
        component: <CustomizeNameplates />
    },
    {
        id: 6,
        title: "Metal Photo Frames",
        description: "Showcase your cherished memories with these sleek and durable metal photo frames, perfect for any décor.",
        image: 'metal-photo-frames.webp',
        component: <MetalPhotoFrames />
    },
];

const Product = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [showEnquiryModal, setShowEnquiryModal] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleDetailsClick = (product) => {
        setSelectedProduct(product);
        setShowDetailsModal(true);
    };

    const handleEnquiryClick = (product) => {
        setSelectedProduct(product);
        setShowEnquiryModal(true);
    };

    // for send data on whatsapp
    const [data, setData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Craft the whatsapp url
        const phone = '+918149327892';
        const text = `name : ${data.name}%OAEmail: ${data.email}%OAMessage: ${data.message}`;
        const WaLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

        // open whatsapp in a new tab
        window.open(WaLink, "_blank");
        console.log("data is passed to WhatsApp");
    }

    return (
        <div className="container-fluid">
            <div className="container py-5 bg-light">
                <h2 className="text-center mb-5 fw-bold" data-aos="fade-down">
                    Featured Products
                </h2>
                <div className="row g-4">
                    {products.map((product) => (
                        <div className="col-md-4" key={product.id} data-aos="fade-up" data-aos-delay={product.id * 100}>
                            <div className="card border-0 shadow-sm h-100 rounded-4 ">
                                <img src={product.image} style={{ height: '200px' }} className="card-img-top rounded-top-4" alt={product.title} />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">{product.title}</h5>
                                    <p className="text-muted">{product.description}</p>
                                    <button className="btn btn-outline-primary mt-2 me-2" onClick={() => handleDetailsClick(product)}>Details</button>
                                    <button className="btn btn-outline-success mt-2" onClick={() => handleEnquiryClick(product)}>Enquiry</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Details Modal */}
                <Modal show={showDetailsModal} onHide={() => setShowDetailsModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedProduct?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{selectedProduct?.description}</p>
                        {selectedProduct?.component}
                        <Button variant="primary" onClick={() => setShowEnquiryModal(true)}>
                            Enquire Now
                        </Button>
                    </Modal.Body>
                </Modal>

                {/* Enquiry Modal */}
                <Modal show={showEnquiryModal} onHide={() => setShowEnquiryModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Enquiry for: {selectedProduct?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
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
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowEnquiryModal(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Product;
