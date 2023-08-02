'use client';

import React, { useState } from "react";
import Footer from '../components/Footer';
import Link from 'next/link';

export default function oneplayer() {
  const [playerOne, setPlayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState('');

  const handleStartGame = () => {
    // Save players' names in local storage
    localStorage.setItem('playerOne', playerOne);
    localStorage.setItem('playerTwo', playerTwo);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen  text-black">
        {/* Static Image */}
        <img className="w-32 h-32 mb-6" src="./assets/VS.png" alt="Static Image" />

        {/* Player One Input */}
        <input
          type="name"
          placeholder="اللاعب الأول"
          className="w-64 p-2 border-4 rounded-lg mb-6"
          value={playerOne}
          onChange={(e) => setPlayerOne(e.target.value)}
        />

        {/* Player Two Input */}
        <input
          type="name"
          placeholder="اللاعب الثاني"
          className="w-64 p-2 border-4 rounded-lg mb-6"
          value={playerTwo}
          onChange={(e) => setPlayerTwo(e.target.value)}
        />

        {/* Start Game Button */}
        <Link href={"/coin"}>
          <button className="bg-[#93BFCF] text-black py-2 px-4 rounded-lg" onClick={handleStartGame}>
            أبدأ اللعبة
          </button>
        </Link>
      </div>

      <Footer />
    </>
  );
}
