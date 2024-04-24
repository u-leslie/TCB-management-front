import React from 'react';
import AppBar from './appbar/page'; 
import Footer from '../footer/Footer';
import Navbar from '../header/Navbar';
import Sidebar from '../sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className=''>
    <Navbar/>
    <div className='flex'>
      <Sidebar/>
    <div className="home w-full  bg-white text-black">
    <AppBar/>
    <div className="content">{children}</div>
    </div>
    </div>
    
      <Footer/>
    </div>
  );
};

export default Layout
