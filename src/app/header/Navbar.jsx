import React from 'react'
import Image from 'next/image'
import logo from '../../../public/assets/logo.png'

function Navbar() {
  return (
    <div className='w-full bg-white shadow-md h-16 z-[9999] fixed'>
      <Image
          src={logo}
          width={130}
          height={130}
          alt="logo"
          className='ml-32'
        />
    </div>
  )
}

export default Navbar
