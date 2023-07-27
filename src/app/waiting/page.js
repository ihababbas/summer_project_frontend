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
    <div className="container mx-auto h-screen flex justify-center items-center">
      {/* First Column */}
      <div className="w-60% mr-4">
        <div className="mb-6">
          <div className="border-b-2 px-2 py-3 text-lg font-bold">Row 1</div>
        </div>
        <div className="mb-6">
          <div className="border-b-2 px-2 py-3 text-lg font-bold">Row 2</div>
        </div>
        <div className="flex">
          <div className="w-1/2 border-r-2">
            <div className="border-b-2 px-2 py-3 text-lg font-bold">Row 3 (Part 1)</div>
          </div>
          <div className="w-1/2">
            <div className="border-b-2 px-2 py-3 text-lg font-bold">Row 3 (Part 2)</div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 border-r-2">
            <div className="border-b-2 px-2 py-3 text-lg font-bold">Row 4 (Part 1)</div>
          </div>
          <div className="w-1/2">
            <div className="border-b-2 px-2 py-3 text-lg font-bold">Row 4 (Part 2)</div>
          </div>
        </div>
      </div>

      {/* Second Column */}
      <div className="w-40%">
        <div className="w-32 h-32 rounded-full bg-gray-300 mb-6"></div>
        <div className="text-center font-bold text-xl">50%</div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default WaitingPage;
