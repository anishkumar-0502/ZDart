
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Import Redirect
import Home from './page/Home';
import About from './page/About/About';
import HowItWorks from './page/HowItWorks/HowItWorks';

//Services
import Services from './page/Services/Services';
import ServiceDetails1 from './page/Services/ServiceDetails/ServiceDetails1';
import ServiceDetails2 from './page/Services/ServiceDetails/ServiceDetails2';
import ServiceDetails3 from './page/Services/ServiceDetails/ServiceDetails3';
import ServiceDetails4 from './page/Services/ServiceDetails/ServiceDetails4';
import ServiceDetails5 from './page/Services/ServiceDetails/ServiceDetails5';

//Services Pricing
import ServicePriceDetails1 from './page/Services/ServicePriceDetails/ServicePriceDetails1';
import ServicePriceDetails2 from './page/Services/ServicePriceDetails/ServicePriceDetails2';
import ServicePriceDetails3 from './page/Services/ServicePriceDetails/ServicePriceDetails3';
import ServicePriceDetails4 from './page/Services/ServicePriceDetails/ServicePriceDetails4';
import ServicePriceDetails5 from './page/Services/ServicePriceDetails/ServicePriceDetails5';


// Contact
import Contact from './page/Contact/Contact';

// Legals
import Disclaimer from './page/Legals/Disclaimer/Disclaimer';
import FAQs from "./page/Legals/FAQ/FAQ";
import Terms from './page/Legals/Terms&Conditions/Terms&Conditions';
import privacypolicy from './page/Legals/Privacy&Policy/Privacy&Policy';

const App = () => {

  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/how-it-works" component={HowItWorks} />

      {/* //Service */}
      <Route path="/Services" component={Services} />
      <Route path="/ServiceDetails01" component={ServiceDetails1} />
      <Route path="/ServiceDetails02" component={ServiceDetails2} />
      <Route path="/ServiceDetails03" component={ServiceDetails3} />
      <Route path="/ServiceDetails04" component={ServiceDetails4} />
      <Route path="/ServiceDetails05" component={ServiceDetails5} />

      {/* //Service Price */}
      <Route path="/ServicePriceDetails01" component={ServicePriceDetails1} />
      <Route path="/ServicePriceDetails02" component={ServicePriceDetails2} />
      <Route path="/ServicePriceDetails03" component={ServicePriceDetails3} />
      <Route path="/ServicePriceDetails04" component={ServicePriceDetails4} />
      <Route path="/ServicePriceDetails05" component={ServicePriceDetails5} />

      {/* //Contact */}
      <Route path="/Contact" component={Contact} />

      {/* //Legals */}
      <Route path="/Disclaimer" component={Disclaimer} />
      <Route path="/FAQ" component={FAQs} />
      <Route path="/Terms" component={Terms} />
      <Route path="/privacy-policy" component={privacypolicy} />


    </Router>
  );
};

export default App;
