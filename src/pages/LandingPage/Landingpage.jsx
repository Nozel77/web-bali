import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Activities from '../../components/Activity';
import Gallery from '../../components/Gallery';
import Footer from '../../components/Footer';

const Landingpage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Activities />
      <Gallery />
      <Footer />
      {/* <Swiper/> */}
    </>
  );
};

export default Landingpage;
