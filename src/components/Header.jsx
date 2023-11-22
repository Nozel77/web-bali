import React, { useState, useEffect } from 'react';
import { Banner1, Banner2, Banner3, Banner4, Banner5 } from "../../assets/culinary";

const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

const Header = ({ title, image, type }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageOpacity(0);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setImageOpacity(1);
      }, 700); // Change the image after fade-out (0.5 seconds)
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, []);

  return (
    <div className='w-full h-[100vh]'>
      <div className='relative w-full h-full'>
        <img
          src={image ?? images[currentImageIndex]}
          alt='Hero Image'
          className='w-full h-full object-cover'
          style={{ opacity: imageOpacity, transition: 'opacity 0.5s' }}
        />
      </div>

      <div className='absolute w-full h-full bg-gradient-to-t from-[#252525] to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 '>
        <h1 className='text-black text-4xl md:text-5xl font-bold text-center'>{title}</h1>
        {type && (
          <p className='text-sm mt-4 text-center text-white bg-[#374151] px-6 py-4 rounded-2xl bg-transparent font-medium drop-shadow-md'>Welcome to FlavorVerse, your passport to culinary adventures!
            <br className='hidden md:block' /> Discover a treasure trove of delectable recipes from around the globe.</p>
        )}
      </div>
    </div>
  );
}

export default Header;
