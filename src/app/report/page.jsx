
"use client"

import React, { useState, useEffect } from 'react';
import Navbar from '../header/Navbar';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import { MagnifyingGlassIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import logo from '../../../public/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import Loader from '../loader/loader'; 

function Report() {
  const [clientNames, setClientNames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetchClientList();
  }, []);

  const fetchClientList = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/client');
      const { clients } = response.data;
      setClientNames(clients);
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching clients:', error);
      setLoading(false); 
    }
  };

  const handleSearch = () => {
   
  };

  return (
    <div className=''>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <div className='home bg-white pt-20 pb-20 text-black w-full'>
          <div className='search flex lg:flex-row lg:ml-56 mt-10 border rounded-lg lg:w-7/12'>
            <Image src={logo} alt='logo' className='w-24 h-10 ml-6 mt-1' />
            <input
              type='search'
              name='search'
              placeholder='Search client'
              className=' h-12 lg:w-[600px] w-[150px] pr-3 outline-none'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <MagnifyingGlassIcon className='w-12 h-12 p-3' onClick={handleSearch} />
          </div>
          <div className='button float-right mr-20 mt-10'>
            <button className='bg-grey-default py-3 px-12 ml-5 rounded-md'>Send Notification</button>
            <Link href='/addClient'>
              <button className='bg-grey-default py-3 px-12 ml-5 lg:mt-0 mt-3 rounded-md'>Add Client</button>
            </Link>
          </div>
          <div className='filter lg:ml-32 ml-5 lg:mt-20 mt-40'>
            <h2>Report type :</h2>
            <select name='filter' id='' className='bg-grey-default outline-none px-6 py-3 rounded-md'>
              <option value='filter' className='bg-white'>
                Paid
              </option>
              <option value='filter' className='bg-white'>
                Unpaid
              </option>
            </select>
            <select name='filter' id='' className='bg-grey-default outline-none px-6 py-3 mt-10 ml-6 rounded-md '>
              <option value='filter' className='bg-white'>
                Monthly
              </option>
              <option value='filter' className='bg-white'>
                Weekly
              </option>
            </select>
          </div>
          {loading ? (
            <Loader /> 
          ) : (
            <div className='lg:py-16 lg:px-10 p-4'>
              <ul className='lg:ml-6 mt-10'>


   {clientNames
  .filter((client) => client && client.company && client.company.toLowerCase().includes(searchTerm.toLowerCase()))
  .map((client, index) => (
    <div className='flex bg-grey-light my-6 p-6 rounded-md' key={index}>
      <li className='w-full h-8 cursor-pointer'>
        <Link href={`/clientInfo/${client._id}`} key={index}>
          {index + 1}. {client.company}
        </Link>
      </li>
      <PencilSquareIcon className='w-6 h-6' />
    </div>
  ))}
              </ul>
              <h2 className='text-center font-bold text-2xl'>{clientNames.length} clients</h2>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Report;
