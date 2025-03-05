import React from 'react';

const Services = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="section-title pt-4">
                            <p className="text-primary text-uppercase fw-bold mb-3">Our Services</p>
                            <h1>Our online and offline services</h1>
                            <p>Our services are designed to meet your needs and exceed your expectations, delivering high-quality results every time</p>
                        </div>
                    </div>
                    <ServiceItem
                        number="01"
                        href="/ServiceDetails1"
                        title="Web Design & Development"
                        description="We create stunning, responsive, and user-friendly websites tailored to your business needs. From front-end aesthetics to robust back-end functionalities, we ensure your website stands out."
                    />
                    <ServiceItem
                        number="02"
                        title="Scalable App Solution"
                        description="Build powerful, scalable applications that grow with your business. Our team specializes in developing high-performance apps with seamless user experiences and future-ready architecture."
                    />
                    <ServiceItem
                        number="03"
                        title="UI/UX"
                        description="Craft intuitive and engaging user experiences with our expert UI/UX design services. We focus on usability, accessibility, and aesthetics to create interfaces that captivate users."
                    />
                    <ServiceItem
                        number="04"
                        title="Quality Assurance"
                        description="Ensure flawless performance with our rigorous quality assurance and testing services. We conduct thorough testing to detect and fix bugs, ensuring a seamless user experience."
                    />
                    <ServiceItem
                        number="05"
                        title="Cloud Solutions"
                        description="Leverage the power of the cloud with our scalable and secure solutions. From cloud storage to computing, we offer tailored services that enhance efficiency and flexibility for your business."
                    />

                </div>
            </div>
        </section>
    );
};

const ServiceItem = ({ number, title, description }) => {
    return (
        <div className="col-lg-4 col-md-6 service-item">
            <a className="text-black" href={'/ServiceDetails' + number}>
                <div className="block">
                    <span className="colored-box text-center h3 mb-4">{number}</span>
                    <h3 className="mb-3 service-title">{title}</h3>
                    <p className="mb-0 service-description">{description}</p>
                </div>
            </a>
        </div>
    );
};

export default Services;
