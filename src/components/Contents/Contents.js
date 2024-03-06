import React from 'react';
import Services from  './Services/Services';
import AboutOurself from './AboutOurself/AboutOurself';
import DifferenceOfUs from './Difference/Difference';
import ProcessWorks from './HowProcessWorks/ProcessWorks';
import TestimonialsSection from './ServiceHolders/ServiceHolders'
import FAQSection from './FAQ/FAQ';

const Contents = () => {
    return (
        <div>
        <Services/>
        <AboutOurself/>
        <DifferenceOfUs/>
        <ProcessWorks/>
        <TestimonialsSection/>
        <FAQSection/>
        </div>
    );
};

export default Contents;
