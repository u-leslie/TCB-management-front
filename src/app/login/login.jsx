"use client"
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../../public/assets/logo.png';
import Image from 'next/image';
import { EyeIcon ,EyeSlashIcon } from '@heroicons/react/24/solid';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch('http://localhost:5000/api/v1/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Logged in successfully');

        setTimeout(() => {
          setRedirect(true);
        }, 2000);
      } else {
        toast.error(data.message || 'Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (redirect) {
      window.location.href = '/home';
    }
  }, [redirect]);

  return (
    <div className="home bg-grey-light text-black w-full h-screen pt-12">
      <div className="bg-white lg:w-4/12 lg:ml-[400px] lg:h-[500px] w-10/12">
        <form onSubmit={handleSubmit} className="ml-8 py-32 pt-8">
          <Image src={logo} width={140} height={140} alt="logo" className="ml-32" />
          <h1 className="font-bold text-2xl ml-24">Admin Login</h1>
          <div className="flex flex-col">
            <label htmlFor="email" className="py-3 pt-6">
              Email 
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 w-11/12 rounded-md outline outline-1"
              placeholder=""
            />
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="password" className="py-3 pt-6">
              Password
            </label>
            <div className="flex items-center">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 w-11/12 rounded-md outline outline-1"
                placeholder=""
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute left-80 focus:outline-none"
              >
                {showPassword ? <EyeSlashIcon className="h-6 w-6" /> : <EyeIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
          <button
            className={`bg-grey-default py-2 mt-12 w-11/12 px-8 rounded-md ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            type="submit"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss />
        </form>
      </div>
    </div>
  );
}

export default Login;
