'use client';

import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function startqustionsgame() {
  const [outcome, setOutcome] = useState('');
  const [playerOne, setPlayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState('');

  useEffect(() => {
    // Retrieve players' names from local storage
    const storedPlayerOne = localStorage.getItem('playerOne');
    const storedPlayerTwo = localStorage.getItem('playerTwo');

    // Display the names
    setPlayerOne(storedPlayerOne);
    setPlayerTwo(storedPlayerTwo);
  }, []);

  const handleFlip = () => {
    const randomOutcome = Math.random() < 0.5 ? playerOne : playerTwo;
    setOutcome(randomOutcome);

    setTimeout(() => {
      // Show the outcome in SweetAlert after 5 seconds
      Swal.fire({
        icon: 'info',
        title: 'Coin Result',
        text: `The coin landed on: ${randomOutcome}`,
        confirmButtonText: 'OK',
      });
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  return (
    <>
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-screen text-center mx-20 px-10  text-black ">
        <h2 className="text-3xl font-semibold mb-4"> لاعب الاول: {playerOne}</h2>
        <h2 className="text-3xl font-semibold mb-4"> لاعب الثاني: {playerTwo}</h2>

        <div className="flex flex-col items-center mt-8">
          <Link href={'/waiting'}>
            <button
              onClick={handleFlip}
              className="bg-[#93BFCF] text-black py-2 px-4 rounded-lg"
            >
              Flip Coin
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}


