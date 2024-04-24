"use client"

import React, { useState, useEffect } from 'react';
import Navbar from '@/app/header/Navbar';
import Sidebar from '@/app/sidebar/Sidebar';
import Footer from '@/app/footer/Footer';
import Loader from '@/app/loader/loader';
import Image from 'next/image';
import profile from '../../../../public/assets/profile.png';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { differenceInMonths, addMonths } from 'date-fns';
import ReactModal from 'react-modal';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ClientInfo = () => {
  const id = useParams();
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    startDate: '',
    endDate: '',
    amount: 0,
  });
  const [addedPayments, setAddedPayments] = useState([]);

  useEffect(() => {
    const fetchAddedPayments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/client/${id.index}/getPayment`);
        const { addedPayments } = response.data;
        setAddedPayments(addedPayments);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching added payments:', error);
        setLoading(false);
      }
    };

    fetchAddedPayments();
  }, [id]);

  const initializePayData = () => {
    if (!addedPayments || addedPayments.length === 0) {
      return [];
    }

    const newPay = addedPayments.map((payment, index) => {
      const start = new Date(payment.startDate);
      const end = new Date(payment.endDate);
      const months = differenceInMonths(end, start);

      const monthlyData = [];
      for (let i = 0; i <= months; i++) {
        const monthDate = addMonths(start, i);
        const month = monthDate.toLocaleString('en-US', { month: 'long' });
        const amountForMonth = i === months ? payment.amount % (months) : Math.floor(payment.amount / (months));

        monthlyData.push({
          id: index * (months + 1) + i + 1,
          month,
          paidDate: monthDate.toISOString().split('T')[0],
          amount: amountForMonth,
        });
      }

      return monthlyData;
    }).flat();

    return newPay.filter((row) => row.amount > 0);
  };

  const payData = initializePayData();

  const handleAddPayment = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  const handlePaymentSubmit = async () => {
    try {
      const duplicatePayment = addedPayments.find(
      (payment) =>
        (payment.startDate <= paymentDetails.startDate &&
          payment.endDate >= paymentDetails.startDate) ||
        (payment.startDate <= paymentDetails.endDate &&
          payment.endDate >= paymentDetails.endDate) ||
        (payment.startDate >= paymentDetails.startDate &&
          payment.endDate <= paymentDetails.endDate)
    );

    if (duplicatePayment) {
      toast.error('Payment already added for selected months');
      return;
    }
      const response = await axios.post(`http://localhost:5000/api/v1/client/${id.index}/addPayment`, {
        startDate: paymentDetails.startDate,
        endDate: paymentDetails.endDate,
        amount: paymentDetails.amount,
      });
      if (response.status >= 200 && response.status < 300) {
        toast.success('Payment added successfully');
      } else {
        toast.error('Failed to add payment. Please try again.');
      }
      
      setAddedPayments((prevPayments) => [...prevPayments, response.data]);
      await fetchClientInfo();
      setModal(false);
      console.log('Payment added successfully!');
    } catch (error) {
      console.error('Error adding payment:', error);
    }
  };
  

  const fetchClientInfo = async () => {
    try {
      const clientResponse = await axios.get(`http://localhost:5000/api/v1/client/${id.index}`);
      const { client } = clientResponse.data;
      setClient(client);  
      setLoading(false);
    } catch (error) {
      console.error('Error fetching client info:', error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (id) {
      fetchClientInfo();
    }
  }, [id]);

  const initializeTableData = () => {
    if (!client || !client.startDate || !client.endDate || client.amount === null || client.amount === undefined ) {
      return [];
    }
    const start = new Date(client.startDate );
    const end = new Date(client.endDate );
    const months = differenceInMonths(end, start);
    const newData = [];
    for (let i = 0; i <= months; i++) {
      const monthDate = addMonths(start, i);
      const month = monthDate.toLocaleString('en-US', { month: 'long' });
      const amountForMonth = i === months ? client.amount % (months) : Math.floor(client.amount / (months));

      newData.push({
        id: i + 1,
        month,
        paidDate: monthDate.toISOString().split('T')[0],
        amount: amountForMonth,
      });
    }

    return newData;
  };

const tableData = initializeTableData().filter((row) => row.amount > 0);


  return (
    <div className='bg-white'>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        {loading ? (
          <div className='lg:ml-80 lg:py-40'>
            <Loader />
          </div>
        ) : (
          <div className='px-4'>
            {client ? (
              <div className='flex flex-col'>
                <div className="home bg-white text-black w-full py-32">
                  <h1 className='text-2xl font-bold text-center'>Client info</h1>
                  <div className='flex flex-col'>
                    <div className="profile lg:ml-20 ml-10 lg:flex">
                      <div>
                        <Image
                          src={profile}
                          alt='profile'
                          width={120}
                          height={120}
                        />
                        <h3 className=''>Name: <span>{client.company}</span></h3>
                        <h3 className='text-grey-light '>Tenant</h3>
                      </div>
                      <button
                        className="bg-grey-default text-white  font-bold py-2 h-12 my-16 lg:ml-[450px] px-10 rounded "
                        onClick={handleAddPayment}
                      >
                        Add Payment
                      </button>
                      <ReactModal
                        isOpen={modal}
                        onRequestClose={handleModalClose}
                        contentLabel="Add Payment"
                        className="w-[600px] py-20 px-10 mt-6 bg-white ml-[350px]"
                       
                      >
                        <div className=' text-black'>
                        <h1 className='font-bold text-xl text-center text-black mb-6'>Add a new payment</h1>                          <div className='startDate  flex flex-col my-6'>  
                            <label htmlFor='startDate' className='pb-2'>Start Date</label>
                          <input
                            type='date'
                            id='startDate'
                            className='p-2 w-full rounded-md border border-gray-300'
                            value={paymentDetails.startDate}
                            onChange={(e) => setPaymentDetails({ ...paymentDetails, startDate: e.target.value })}
                          />
                          </div>
                          <div className='endDate flex flex-col my-6'>
                             <label htmlFor='endDate' className='pb-2'>End Date</label>
                          <input
                            type='date'
                            id='endDate'
                            className='p-2 w-full rounded-md border border-gray-300'
                            value={paymentDetails.endDate}
                            onChange={(e) => setPaymentDetails({ ...paymentDetails, endDate: e.target.value })}
                          />
                          </div>
                        
                        <div className='amount  flex flex-col my-6'>
                          <label htmlFor='amount' className='pb-2'>Amount</label>
                          <input
                           className='p-2 w-full rounded-md border border-gray-300'
                            type='number'
                            id='amount'
                            value={paymentDetails.amount}
                            onChange={(e) => setPaymentDetails({ ...paymentDetails, amount: e.target.value })}
                          />
                        </div>
                         <div className='text-center'>
                         <button onClick={handlePaymentSubmit} className='bg-gray-800 text-white py-2 px-4 rounded-md' >Submit Payment</button>
                         </div>
                          
                        </div>
                      </ReactModal>

                    </div>
                    <div className="table ml-20 pb-10">
                      <table className="border-collapse border w-11/12 mt-4">
                        <thead>
                          <tr className="bg-grey-default text-white">
                            <th className="border py-2 px-4 md:px-20 ">Month</th>
                            <th className="border py-2 px-4 md:px-16 ">Paid Date</th>
                            <th className="border py-2 px-4 md:px-20 ">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tableData.map((row) => (
                            <tr key={row.id} className="border">
                              <td className="border py-2 px-4 md:px-20 ">{row.month}</td>
                              <td className="border py-2 px-4 md:px-16 ">{row.paidDate}</td>
                              <td className="border py-2 px-4 md:px-20 ">{row.amount}</td>
                            </tr>
                          ))}

                        </tbody>
                        <tbody>
                          {payData.map((row) => (
                            <tr key={row.id} className="border">
                              <td className="border py-2 px-4 md:px-20">{row.month}</td>
                              <td className="border py-2 px-4 md:px-16">{row.paidDate}</td>
                              <td className="border py-2 px-4 md:px-20 ">{row.amount}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className='lg:px-20 ml-10 lg:ml-0'>
                    <h1 className='text-xl font-bold mb-4'>Personal information</h1>
                    <div className='block'>
                      <div className=''>
                        <p>
                          <span className='font-bold'>Name: </span> {client.company}
                        </p>
                        <p>
                          <span className='font-bold'>Phone: </span>0{client.phone}
                        </p>
                      </div>
                      <div className=''>
                        <h1 className='text-xl font-bold my-10'>Rent information</h1>
                        <p>
                          <span className='font-bold'>M²: </span> {client.m2}
                        </p>
                        <p>
                          <span className='font-bold'>Company Names: </span> {client.company}
                        </p>
                        <p>
                          <span className='font-bold'>Representative: </span> {client.representative}
                        </p>
                        <p>
                          <span className='font-bold'>Room: </span> {client.room}
                        </p>
                        <p>
                          <span className='font-bold'>TIN number: </span> {client.tin}
                        </p>
                        <p>
                          <span className='font-bold'>Caution: </span> {client.caution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <p className='text-black text-center'>Client not found</p>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss />
    </div>
  );
};

export default ClientInfo;
