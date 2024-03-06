import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faBlenderPhone, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';

const DifferenceOfUs = () => {
    return (
        <section className="section">
        <div className="container">
            <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
                <div className="section-title">
                <p className="text-primary text-uppercase fw-bold mb-3">Difference Of Us</p>
                <h1>What Makes Us <br /> Different Form Other?</h1>
                <div className="content mb-0 mt-4">
                    <p>At ZDart, we distinguish ourselves through a distinctive combination of expertise, personalized attention, and cutting-edge technology. Whether you require web development, content writing, or any other digital solution, trust us to surpass your expectations and provide genuine value.</p>
                    <p>Our commitment to setting new standards is evident in our continuous innovation and integration of the latest industry advancements into our services. Our dedicated team tirelessly strives to deliver not just satisfactory but exceptional results. Focused on customer satisfaction and driven by a pursuit of excellence, we are confident in our ability to stand out and provide unparalleled solutions in a competitive landscape.</p>
                </div>
                </div>
            </div>
            <div className="col-lg-6">
                <DifferenceOfUsItem icon={faShieldAlt} title="Fast And Secure Process" description="Experience lightning-fast and secure processes with us. Trust us to take care of your needs efficiently" />
                <DifferenceOfUsItem icon={faBlenderPhone} title="Quick Answers" description="Get fast solutions with our quick response time. Experience seamless service every time" />
                <DifferenceOfUsItem icon={faMoneyBillAlt} title="We Get You Your Services Quick" description="Your satisfaction is our top priority, and we work hard to ensure you get your services quickly" />
            </div>
            </div>
        </div>
        </section>
    );
    };

    const DifferenceOfUsItem = ({ icon, title, description }) => {
    return (
        <div className="difference-of-us-item p-3 rounded mr-0 me-lg-4">
        <div className="d-block d-sm-flex align-items-center m-2">
            <div className="icon me-4 mb-4 mb-sm-0">
            <FontAwesomeIcon icon={icon} className="mt-4" style={{ fontSize: '36px' }} />
            </div>
            <div className="block">
            <h3 className="mb-3">{title}</h3>
            <p className="mb-0">{description}</p>
            </div>
        </div>
        </div>
    );
};

export default DifferenceOfUs;
