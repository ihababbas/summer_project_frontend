'use client';

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function oneplayer() {
  const [playerName, setPlayerName] = useState('');
  const router = useRouter();

  const handleStartGame = () => {
    // Save the player name to localStorage
    localStorage.setItem('playerName', playerName);

    // Redirect to the "level" page
    router.push('/level');
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-black">
        {/* Static Image */}
        <img className="w-32 h-32 mb-6" src="./assets/login.png" alt="Static Image" />

        {/* Player Name Input */}
        <input
          type="text"
          placeholder="اسم اللاعب"
          className="w-64 p-2 border-4 rounded-lg mb-6"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />

        {/* Start Game Button */}
        <button
          className="bg-[#93BFCF] text-black py-2 px-4 rounded-lg"
          onClick={handleStartGame}
        >
          أبدأ اللعبة
        </button>
      </div>

      <Footer />
    </>
  );
}
