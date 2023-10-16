import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Activities from '../../components/Activity';
import Gallery from '../../components/Gallery';
import Footer from '../../components/Footer';
import Gubernur from '../../components/Gubernur'
import Question from '../../components/Question';

const Landingpage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Activities />
      <Gubernur/>
      <Question/>
      <Gallery />
      <Footer />
      
    </>
  );
};

export default Landingpage;
