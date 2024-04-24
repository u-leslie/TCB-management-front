import React from 'react';
import Image from 'next/image';
import logo from './../../../public/assets/logo.png';

function Loader() {
  return (
    <div className='flex items-center justify-center bg-white p-20'>
      <div className='border-8 border-yellow-default h-40 w-40 rounded-full'></div>
      <div className='animate-spin border-t-8 border-b-8 border-yellow-default h-24 w-24 rounded-full absolute'></div>
      <div className='flex items-center animate-none justify-center'>
          <Image src={logo} alt="logo" className='w-24 h-12 absolute mr-24'  />
        </div>
    </div>
  );
}

export default Loader;
