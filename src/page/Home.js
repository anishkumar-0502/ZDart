import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero'; // Import the ApplyLoanModal component
import Contents from  '../components/Contents/Contents'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Contents/>
      <Footer/>
    </div>
  );
};

export default Home;
