import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Activities from '../../components/Activity'
import Gallery from '../../components/Gallery'
import Footer from '../../components/Footer'
import Course from '../../components/Course'


const Landingpage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Activities/>
    {/* <Course/> */}
    <Gallery/>
    <Footer/>
    </>
  )
}

export default Landingpage