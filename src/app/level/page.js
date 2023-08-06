'use client';

import React, { useState, useEffect } from "react";
import Footer from '../components/Footer';
import Link from 'next/link';

export default function startqustionsgame() {
  const [playerName, setPlayerName] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState(''); // New state for the selected difficulty

  useEffect(() => {
    // Retrieve player name from localStorage
    const storedPlayerName = localStorage.getItem('playerName');
    if (storedPlayerName) {
      setPlayerName(storedPlayerName);
    }
  }, []);

  // Save the selected difficulty to localStorage when a button is clicked
  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
    localStorage.setItem('selectedDifficulty', difficulty);
  };

  return (
    <>
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-screen text-center mx-20 px-10  text-black ">
        <h2 className="text-3xl font-semibold mb-4">لاعب واحد</h2>
        {playerName && <h3 className="text-xl font-semibold mb-2">مرحبا, {playerName}!</h3>}
        <div className="flex mt-4">
        <Link href={'/questionspage'}><button
            className="bg-[#93BFCF] text-white px-4 py-2 rounded-lg mr-4"
            onClick={() => handleDifficultySelect('صعب')}
          >
            صعب
          </button> </Link>
          <Link href={'/questionspage'}>  <button
            className="bg-[#93BFCF] text-white px-4 py-2 rounded-lg mr-4"
            onClick={() => handleDifficultySelect('متوسط')}
          >
            متوسط
          </button> </Link>
          <Link href={'/questionspage'}> <button
            className="bg-[#93BFCF] text-white px-4 py-2 rounded-lg"
            onClick={() => handleDifficultySelect('سهل')}
          >
            سهل
          </button> </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
