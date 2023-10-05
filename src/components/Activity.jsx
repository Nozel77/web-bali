import React from 'react';

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Budaya</h3>
        <img
        className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src='src/assets/budaya.jpg'
          alt='/'
        />
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Sejarah</h3>
        <img
        className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src='src/assets/sejarah.jpg'
          alt='/'
        />
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Kuliner</h3>
        <img
        className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src='src/assets/kuliner.jpeg'
          alt='/'
        />
      </div>
    </div>
  );
};

export default Activities;
