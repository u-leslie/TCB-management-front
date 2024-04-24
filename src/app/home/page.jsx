import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Footer from '../footer/Footer'
import home from './../../../public/assets/home.png'
import ellipse from './../../../public/assets/ellipse.png'
import home2 from './../../../public/assets/home2.png'
import Navbar from '../header/Navbar'
import Image from 'next/image'
import logo from './../../../public/assets/logo.png'
import { MagnifyingGlassIcon} from '@heroicons/react/24/solid'


function page() {
  return (
    <div className='h-screen'>
    <Navbar/>
    <div className='flex'>
      <Sidebar/>
    <div className="home bg-white text-black">
    <div className="content">
      <div className="img">
      <Image
    src={home}
    alt="home"
    className='h-screen'
    />
      <Image
    src={ellipse}
    alt="home"
    className=' hidden lg:block lg:absolute lg:top-16 w-8/12 ml-32 h-[530px]'
    />
       <Image
    src={home2} 
    alt="home"
    className='lg:absolute lg:top-0 lg:right-4 lg:float-right lg:clear-right'
    />
   
      </div>
   
    <h2 className='text-3xl font-bold text-white absolute top-64 lg:w-5/12 lg:ml-[300px]'>
    Welcome to your TCB Management System.
    </h2>
    <h2 className='text-md  text-white absolute top-[340px] lg:ml-[340px] ml-12'>
    There to simplify your tasks.
    </h2>
    <div className=" bg-white search flex flex-row lg:ml-56 lg:top-96 top-[500px] border absolute rounded-lg lg:w-5/12">
      <Image
      src={logo}
      alt="logo"
      className="w-24 h-10 ml-6 mt-1"
      />
        <input
        type='search'
        name='search'
        placeholder='Search client'
        className=' h-12 lg:w-[400px] pr-3 outline-none'
        />
        <MagnifyingGlassIcon className='w-12 h-12 p-3'/>
      </div>
    </div>
   
    </div>
    </div>
      <Footer/>
    </div>
  )
  }

export default page
