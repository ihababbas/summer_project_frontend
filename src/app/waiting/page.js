'use client';
import React, { useState, useEffect } from 'react';



import Swal from 'sweetalert2';

import Footer from '../components/Footer';
import Link from 'next/link';
const WaitingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Clean up the timer on unmount (optional)
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
      {isLoading ? (
        <div className="container mx-auto h-screen flex justify-center items-center">
          <div className="text-center">
            <div className="animate-spin text-3xl mb-4">&#128259;</div>
            <p>Loading...</p>
          </div>
        </div>
      ) : (
       
        <div >
      
        <div className="flex h-screen">
      {/* First Section (Gap) */}
      <div className="flex-1"></div>

      {/* Second Section (Table) */}
      <div className="flex-[2] flex items-center justify-center">
      <div className="flex justify-center items-center h-screen">
      <table className="border-collapse border border-solid border-[black]">
        <tbody>
          <tr>
            <td colSpan="2" className='border px-5 py-2.5 border-solid border-[black]'>Row 1</td>
          </tr>
          <tr>
            <td colSpan="2" className='border px-5 py-2.5 border-solid border-[black]'>Row 2</td>
          </tr>
          <tr>
            <td className='border px-5 py-2.5 border-solid border-[black]'>Row 3 - Part 1</td>
            <td className='border px-5 py-2.5 border-solid border-[black]'>Row 3 - Part 2</td>
          </tr>
          <tr>
            <td className='border px-5 py-2.5 border-solid border-[black]'>Row 4 - Part 1</td>
            <td className='border px-5 py-2.5 border-solid border-[black]'>Row 4 - Part 2</td>
          </tr>
        </tbody>
      </table>
    </div>
      </div>

      {/* Third Section (Circle and Mark %) */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-[100px] h-[100px] bg-[#007bff] rounded-[50%]"></div>
        <div className="text-2xl text-[#007bff]">%</div>
      </div>

      {/* Fourth Section (Gap) */}
      <div className="flex-1"></div>
    </div>
    </div>
      )}

    <Footer/>
    </>
  );
};

export default WaitingPage;
