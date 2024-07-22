"use client"
import React, { useState ,useEffect} from 'react';
import Navbar from '../header/Navbar';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function AddClient() {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [representative, setRepresentative] = useState('');
  const [tin, setTin] = useState('');
  const [book,setBook] = useState('');
  const [m2, setM2] = useState('');
  const [room, setRoom] = useState('');
  const [caution, setCaution] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [amount, setAmount] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/v1/client', {
        email,
        phone,
        company,
        representative,
        room,
        tin,
        m2,
        book,
        caution,
        startDate,
        endDate,
        amount,
      });

      if (response.status >= 200 && response.status < 300) {
        toast.success('Client added successfully');
        setRedirect(true); 
      } else {
        toast.error('Failed to add client. Please try again.');
      }
    } catch (error) {
      console.error('Error during API call:', error);
      toast.error('failed adding client. Please try again.');
    }
  };

  useEffect(() => {
    if (redirect) {
      window.location.href = '/dashboard/client';
    }
  }, [redirect]);
  return (
    <div className=''>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <div className='home bg-white text-black w-[80%] lg:ml-48'>
          <div className=' w-9/12 ml-40'>
          <h1 className='font-bold text-2xl text-center text-black mt-24'>Register new client</h1>

          <form onSubmit={handleSubmit} className='bg-grey-light w-11/12 mb-20 mt-6 shadow-md rounded px-8 py-6'>

            <div className='mb-4'>
              <label htmlFor='phone' className='block text-black text-sm font-bold mb-2'>
                Telephone number
              </label>
              <input
                type='number'
                id='phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='p-2 w-full rounded-md border border-gray-300'
                placeholder='+250'
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='email' className='block text-black text-sm font-bold mb-2'>
                Email
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='p-2 w-full rounded-md border border-gray-300'
                placeholder=''
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='company' className='block text-black text-sm font-bold mb-2'>
                Company Name
              </label>
              <input
                type='text'
                id='company'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className='p-2 w-full rounded-md border border-gray-300'
                placeholder=''
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='representative' className='block text-black text-sm font-bold mb-2'>
                Representative
              </label>
              <input
                type='text'
                id='representative'
                value={representative}
                onChange={(e) => setRepresentative(e.target.value)}
                className='p-2 w-full rounded-md border border-gray-300'
                placeholder=''
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='tin' className='block text-black text-sm font-bold mb-2'>
                TIN
              </label>
              <input
                type='number'
                id='tin'
                value={tin}
                onChange={(e) => setTin(e.target.value)}
                className='p-2 w-full rounded-md border border-gray-300'
                placeholder=''
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='m2' className='block text-black text-sm font-bold mb-2'>
                Square Meters
              </label>
              <input
                type='number'
                id='m2'
                value={m2}
                onChange={(e) => setM2(e.target.value)}
                className='p-2 w-full rounded-md border border-gray-300'
                placeholder=''
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='room' className='block text-black text-sm font-bold mb-2'>
                Room
              </label>
              <input
                type='number'
                id='room'
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className='p-2 w-full rounded-md border border-gray-300'
                placeholder=''
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='book' className='block text-black text-sm font-bold mb-2'>
                Booking amount
              </label>
              <input
                type='number'
                id='book'
                value={book}
                onChange={(e) => setBook(e.target.value)}
                className='p-2 w-full rounded-md border border-gray-300'
                placeholder=''
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='caution' className='block text-black text-sm font-bold mb-2'>
                Caution
              </label>
              <input
                type='number'
                id='caution'
                value={caution}
                onChange={(e) => setCaution(e.target.value)}
                className='p-2 w-full rounded-md border border-gray-300'
                placeholder=''
              />
            </div>

            <div className='flex gap-4 mb-4'>
              <div className='w-1/2'>
                <label htmlFor='startDate' className='block text-black text-sm font-bold mb-2'>
                  Start Date
                </label>
                <input
                  type='date'
                  id='startDate'
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className='p-2 w-full rounded-md border border-gray-300'
                />
             </div>
              <div className='w-1/2'>
                <label htmlFor='endDate' className='block text-black text-sm font-bold mb-2'>
                  End Date
                </label>
                <input
                  type='date'
                  id='endDate'
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className='p-2 w-full rounded-md border border-gray-300'
                />
              </div>   
            </div>

            <div className='mb-6'>
              <label htmlFor='amount' className='block text-black text-sm font-bold mb-2'>
                Amount
              </label>
              <input
                type='number'
                id='amount'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className='p-2 w-full rounded-md border border-gray-300'
                placeholder=''
              />
            </div>

            <div className='text-center'>
              <button
                className='bg-gray-800 text-white py-2 px-4 rounded-md'
                type='submit'
              >
                Add Client
              </button>
               <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss />

            </div>
          </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default AddClient;
