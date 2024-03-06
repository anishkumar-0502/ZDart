import React from 'react';
import img1 from "../../../assets/images/payment-info.png";
import img2 from '../../../assets/images/illustration-2.png';
import img3 from '../../../assets/images/illustration-1.png';
const ProcessWorks = () => {
    return (
        <section className="homepage_tab position-relative">
        <div className="section container">
        <div className="row justify-content-center">
            <div className="col-lg-8 mb-4">
            <div className="section-title text-center">
                <p className="text-primary text-uppercase fw-bold mb-3">Our Work Process</p>
                <h1>Get to Know how the process works</h1>
            </div>
            </div>
            <div className="col-lg-10">
            <ul className="payment_info_tab nav nav-pills justify-content-center mb-4" id="pills-tab" role="tablist">
                <li className="nav-item m-2" role="presentation"> <a
                    className="nav-link btn btn-outline-primary effect-none text-dark active" id="pills-how-much-can-i-recive-tab"
                    data-bs-toggle="pill" href="#pills-how-much-can-i-recive" role="tab"
                    aria-controls="pills-how-much-can-i-recive" aria-selected="true">Contact Us</a>
                </li>
                <li className="nav-item m-2" role="presentation"> <a
                    className="nav-link btn btn-outline-primary effect-none text-dark " id="pills-how-much-does-it-costs-tab"
                    data-bs-toggle="pill" href="#pills-how-much-does-it-costs" role="tab"
                    aria-controls="pills-how-much-does-it-costs" aria-selected="true">Review And Approve</a>
                </li>
                <li className="nav-item m-2" role="presentation"> <a
                    className="nav-link btn btn-outline-primary effect-none text-dark " id="pills-how-do-i-repay-tab"
                    data-bs-toggle="pill" href="#pills-how-do-i-repay" role="tab" aria-controls="pills-how-do-i-repay"
                    aria-selected="true">Payment Method</a>
                </li>
            </ul>
            <div className="rounded shadow bg-white p-5 tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-how-much-can-i-recive" role="tabpanel"
                aria-labelledby="pills-how-much-can-i-recive-tab">
                <div className="row align-items-center">
                    <div className="col-md-6 order-1 order-md-0">
                    <div className="content-block">
                        <h3 className="mb-4">Contact us</h3>
                        <div className="content">
                            <p>We make it easy for our clients to contact us in the way that is most convenient for them. One option is to use our Contact Us page on our website, where clients can fill out a form and submit it directly to us. This allows for a quick and efficient way to get in touch with us.</p>                        
                            <p>Another option for contacting us is through email. We provide our email address on our website for clients to reach out to us with any questions or concerns they may have. Clients can also reach us through phone calls, where they can speak directly with a member of our team and receive immediate assistance.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 order-0 order-md-1 mb-5 mt-md-0">
                    <div className="image-block text-center">
                        <img loading="lazy" decoding="async"
                        src={img1} alt="How Much Can I Recive?" className="img-fluid"/>
                    </div>
                    </div>
                </div>
                </div>
                <div className="tab-pane fade " id="pills-how-much-does-it-costs" role="tabpanel"
                aria-labelledby="pills-how-much-does-it-costs-tab">
                <div className="row align-items-center">
                    <div className="col-md-6 order-1 order-md-0">
                    <div className="content-block">
                        <h3 className="mb-4">Review & Approve</h3>
                        <div className="content">
                            <p>Once we have received your project requirements, we will provide you with a detailed quote outlining the scope of the project, timeline and the cost. You can view the quote via email . If you have any questions or concerns about the quote, we encourage you to reach out to our team to discuss them.</p>
                            <p>If you are satisfied with the quote, you can approve it directly by replying to our email or by making a Call. Once you have approved the quote, we will begin working on your project as per the agreed-upon timeline</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 order-0 order-md-1 mb-5 mt-md-0">
                    <div className="image-block text-center">
                        <img loading="lazy" decoding="async" src={img2} alt="How Much Does It Costs?" className="img-fluid"/>
                    </div>
                    </div>
                </div>
                </div>
                <div className="tab-pane fade " id="pills-how-do-i-repay" role="tabpanel"
                aria-labelledby="pills-how-do-i-repay-tab">
                <div className="row align-items-center">
                    <div className="col-md-6 order-1 order-md-0">
                    <div className="content-block">
                        <h3 className="mb-4">How Do I pay?</h3>
                        <div className="content">
                            <p>At our company, we offer PayPal as a secure and convenient payment option for our clients. With PayPal, our clients can quickly and easily send payments online using their PayPal account, credit card, or bank account.</p>
                            <p>This means that our clients can make payments from anywhere in the world, at any time, and without the need to share their financial information directly with us. Our team is also available to answer any questions or concerns that our clients may have about the payment process, to ensure a seamless and stress-free experience.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 order-0 order-md-1 mb-5 mt-md-0">
                    <div className="image-block text-center">
                        <img loading="lazy" decoding="async" src={img3} alt="How Do I Repay?" className="img-fluid"/>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="has-shapes">
            <svg className="shape shape-left text-light" width="290" height="709" viewBox="0 0 290 709" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M-119.511 58.4275C-120.188 96.3185 -92.0001 129.539 -59.0325 148.232C-26.0649 166.926 11.7821 174.604 47.8274 186.346C83.8726 198.088 120.364 215.601 141.281 247.209C178.484 303.449 153.165 377.627 149.657 444.969C144.34 546.859 197.336 649.801 283.36 704.673"
                stroke="currentColor" strokeMiterlimit="10" />
            <path
                d="M-141.434 72.0899C-142.111 109.981 -113.923 143.201 -80.9554 161.895C-47.9878 180.588 -10.1407 188.267 25.9045 200.009C61.9497 211.751 98.4408 229.263 119.358 260.872C156.561 317.111 131.242 391.29 127.734 458.631C122.417 560.522 175.414 663.463 261.437 718.335"
                stroke="currentColor" strokeMiterlimit="10" />
            <path
                d="M-163.379 85.7578C-164.056 123.649 -135.868 156.869 -102.901 175.563C-69.9331 194.256 -32.086 201.934 3.9592 213.677C40.0044 225.419 76.4955 242.931 97.4127 274.54C134.616 330.779 109.296 404.957 105.789 472.299C100.472 574.19 153.468 677.131 239.492 732.003"
                stroke="currentColor" strokeMiterlimit="10" />
            <path
                d="M-185.305 99.4208C-185.982 137.312 -157.794 170.532 -124.826 189.226C-91.8589 207.919 -54.0118 215.597 -17.9666 227.34C18.0787 239.082 54.5697 256.594 75.4869 288.203C112.69 344.442 87.3706 418.62 83.8633 485.962C78.5463 587.852 131.542 690.794 217.566 745.666"
                stroke="currentColor" strokeMiterlimit="10" />
            </svg>
            <svg className="shape shape-right text-light" width="474" height="511" viewBox="0 0 474 511" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M601.776 325.899C579.043 348.894 552.727 371.275 520.74 375.956C478.826 382.079 438.015 355.5 412.619 321.6C387.211 287.707 373.264 246.852 354.93 208.66C336.584 170.473 311.566 132.682 273.247 114.593C220.12 89.5159 155.704 108.4 99.7772 90.3769C53.1531 75.3464 16.3392 33.2759 7.65012 -14.947"
                stroke="currentColor" strokeMiterlimit="10" />
            <path
                d="M585.78 298.192C564.28 319.945 539.378 341.122 509.124 345.548C469.472 351.341 430.868 326.199 406.845 294.131C382.805 262.059 369.62 223.419 352.278 187.293C334.936 151.168 311.254 115.417 275.009 98.311C224.74 74.582 163.815 92.4554 110.913 75.3971C66.8087 61.1784 31.979 21.3767 23.7639 -24.2362"
                stroke="currentColor" strokeMiterlimit="10" />
            <path
                d="M569.783 270.486C549.5 290.99 526.04 310.962 497.501 315.13C460.111 320.592 423.715 296.887 401.059 266.641C378.392 236.402 365.963 199.965 349.596 165.901C333.24 131.832 310.911 98.1265 276.74 82.0034C229.347 59.6271 171.895 76.4848 122.013 60.4086C80.419 47.0077 47.5905 9.47947 39.8431 -33.5342"
                stroke="currentColor" strokeMiterlimit="10" />
            <path
                d="M553.787 242.779C534.737 262.041 512.691 280.809 485.884 284.722C450.757 289.853 416.568 267.586 395.286 239.173C373.993 210.766 362.308 176.538 346.945 144.535C331.581 112.533 310.605 80.8723 278.502 65.7217C233.984 44.6979 180.006 60.54 133.149 45.4289C94.0746 32.8398 63.2303 -2.41965 55.9568 -42.8233"
                stroke="currentColor" strokeMiterlimit="10" />
            <path
                d="M537.791 215.073C519.964 233.098 499.336 250.645 474.269 254.315C441.41 259.126 409.422 238.286 389.513 211.704C369.594 185.13 358.665 153.106 344.294 123.17C329.923 93.2337 310.293 63.6078 280.258 49.4296C238.605 29.7646 188.105 44.5741 144.268 30.4451C107.714 18.6677 78.8538 -14.3229 72.0543 -52.1165"
                stroke="currentColor" strokeMiterlimit="10" />
            </svg>
        </div>
        </div>
    </section>
    );
}

export default ProcessWorks;
