import React from 'react'
import Footer from '../../components/Footer'
import Timeline from '../../components/history/Timeline'
import Navbar from '../../components/Navbar'

const History = () => {
  return (
    <div className='bg-[#ffffff] mt-14'>
    <Navbar/>
    <Timeline/>
    <Footer/>
    </div>
    
  )
}

export default History