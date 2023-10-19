import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,  
    });
  }, []);

  return (
    <div className='w-full h-[90vh]'>
      <img
        src='src/assets/background.jpg'
        className='w-full h-full object-cover mt-[68px]'
      />
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
          <h1 className='font-bold text-4xl' data-aos="fade-right" data-aos-delay="500">Bali Banyak Bulenya</h1>
          <p data-aos="fade-right" data-aos-delay="1000">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            doloribus totam dicta ab ratioe ne. Explicabo eveniet dolor, omnis in
            recusandae temporibus suscipit cum nihil officia deserunt possimus
            saepe praesentium accusamus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
