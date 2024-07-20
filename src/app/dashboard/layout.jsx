import React from 'react';
import AppBar from './appbar/page'; 
import Footer from '../footer/Footer';
import Navbar from '../header/Navbar';
import Sidebar from '../sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className='w-full'>
    <Navbar/>
    <div className='flex float-left'>
      <Sidebar/>
    <div className="home w-[90%] float-right bg-white text-black">
    <AppBar/>
    <div className="content">{children}</div>
    </div>
    </div>
    
      <Footer/>
    </div>
  );
};

export default Layout
