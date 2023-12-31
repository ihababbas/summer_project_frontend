"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

import Footer from '../components/Footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const router = useRouter(); // Move useRouter inside the component function

  const handleLogin = () => {
    // Check if the email is admin@admin.com
    if (email === 'admin@admin.com' || email === 'admin') {
      router.push('/admincontrol');
    } else {
      // Show a welcome message using SweetAlert and go back to the home page
      Swal.fire({
        icon: 'success',
        title: 'Welcome!',
        text: `Welcome to our website, ${email}!`,
        confirmButtonText: 'OK',
      }).then(() => {
        router.push('/');
      });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-black">
        {/* Static Image */}
        <img className="w-32 h-32 mb-6" src="./assets/login.png" alt="Static Image" />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="w-64 p-2 border-4 rounded-lg mb-6"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Login Button */}
        <button
          className="bg-[#93BFCF] text-white py-2 px-4 rounded-lg"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>

      <Footer />
    </>
  );
}
