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
            <ServiceItem number="01" href="/ServiceDetails1" title="Web Design & Development" description="Looking to establish a stronger online presence? Our skilled web development team is here to design and develop bespoke websites that align perfectly with your brand." />
            <ServiceItem number="02" title="Web Hosting" description="Choose our hosting services for a swift, scalable, and customizable experience, precisely crafted to align with the individual demands of your website and business." />
            <ServiceItem number="03" title="Web Vitals" description="We employ cutting-edge industry standards and tools to analyze and enhance the key metrics crucial for improving your website's performance and accessibility." />
            <ServiceItem number="04" title="SEO" description="Elevate your digital visibility with Web Innoventix SEO services. Utilizing proven tactics, our team works to enhance your search engine rankings and channel more traffic to your site." />
            <ServiceItem number="05" title="Content Writing" description="Make your message resonate with our professional writing services, where our adept writers specialize in crafting compelling website content and product descriptions." />
            </div>
        </div>
        </section>
    );
};

const ServiceItem = ({ number, title, description }) => {
    return (
        <div className="col-lg-4 col-md-6 service-item">
        <a className="text-black" href={'/ServiceDetails'+number}>
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
