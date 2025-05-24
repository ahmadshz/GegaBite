import React from 'react';

const Preload = () => {
  return (
    <div className='fixed inset-0 bg-[#FEC30D] dark:bg-black z-50 flex flex-col items-center justify-center text-center px-4'>
      <h1 className='text-3xl font-bold text-black dark:text-white mb-4'>
        Welcome to Gega Bite 
      </h1>
      <p className='text-lg text-gray-800 dark:text-gray-300 max-w-md'>
        Serving you the finest flavors, made with passion and presented with love. 
        Get ready to indulge in an unforgettable culinary experience.
      </p>
    </div>
  );
};

export default Preload;
