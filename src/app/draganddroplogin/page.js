"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';

const PreviousPage = () => {
  const [selectedNumber, setSelectedNumber] = useState(2); // Default value
  const [playerName, setPlayerName] = useState('');

  const handleStartGame = () => {
    // Store selected number and player name in local storage
    localStorage.setItem('selectedNumber', selectedNumber);
    localStorage.setItem('playerName', playerName);

    // Navigate to the drag and drop game page
    // Make sure to provide the correct path to the DragAndDropGame component
    // For example: '/drag-and-drop-game'
    window.location.href = '/draganddropgame';
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <img
        className="w-32 h-32 mb-6"
        src="./assets/login.png"
        alt="Static Image"
      />
      <input
        type="text"
        placeholder="اسم اللاعب"
        className="w-64 p-2 border-4 rounded-lg mb-6"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <label className="mb-2 text-lg font-bold">
        اختر عدد السور:
        <select
          className="ml-2 px-2 py-1 border rounded-md"
          value={selectedNumber}
          onChange={(e) => setSelectedNumber(e.target.value)}
        >
          {Array.from({ length: 14 }, (_, i) => i + 2).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </label>
      <button
        className="bg-[#93BFCF] text-black py-2 px-4 rounded-lg"
        onClick={handleStartGame}
      >
        أبدأ اللعبة
      </button>
 
      <Footer />
    </div>
  );
};

export default PreviousPage;
