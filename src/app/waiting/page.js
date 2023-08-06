"use client";

import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Link from 'next/link';

const WaitingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  // Save the selected difficulty to sessionStorage when a button is clicked
  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
    sessionStorage.setItem('selectedDifficulty', difficulty);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        {isLoading ? (
          // Loading state
          <div className="text-center">
            <div className="animate-spin text-3xl mb-4">&#128259;</div>
            <p>يرجى الانتظار.......</p>
          </div>
        ) : (
          // Navigate to QuestionsPage after loading is complete
          <Link href="/questionspage">
            <button
              className="bg-[#93BFCF] text-white px-4 py-2 rounded-lg"
              onClick={() => handleDifficultySelect(selectedDifficulty)}
            >
              ابدأ اللعبة
            </button>
          </Link>
        )}
      </div>
      <Footer />
    </>
  );
};

export default WaitingPage;
