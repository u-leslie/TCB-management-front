"use client"
import React, { useState,useEffect } from 'react'
import { MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import axios from 'axios';
import Loader from '../../loader/loader'; 
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import {jsPDF} from 'jspdf'

function Client() {
  const [clientNames,setClientNames]= useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('all');

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

  const handleSearch =()=>{

  }

  return (
    <div className='w-[90%] lg:ml-48'>
      <div className="search lg:flex mt-10 lg:ml-10">
        <div className='lg:flex flex float-right lg:mt-0 mt-5'>
          <MagnifyingGlassIcon className='w-12 h-12 ml-6 p-3 bg-brown-default' onClick={handleSearch}/>
        <input
        type='search'
        name='search'
        placeholder='Search client'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className=' h-12 lg:w-[600px] w-72 border outline-none pl-5'
        />
        </div>
        
        <select name="filter" id="" className='bg-grey-default outline-none px-4 py-2 ml-5 lg:mt-0 mt-5 rounded-md'>
          <option value="filter" className='bg-white'>Paid</option>
          <option value="filter" className='bg-white'>Unpaid</option>
        </select>
      </div>
      {loading ? (
            <Loader /> 
          ) : (
            <div className='lg:py-16 lg:px-10 p-4'>
              <ul className='lg:ml-2 mt-10'>


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
  )
}

export default Client
