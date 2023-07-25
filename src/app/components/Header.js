import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Header = () => {
  return (
    <header className="bg-[#061735] text-white py-4 px-8">
    <div className="container mx-auto flex items-center justify-between">
      {/* First Column - Card */}
      <div className="flex-2">
        <div className="bg-[#A30000] text-black p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Card Title</h3>
          <p>This is the card content.</p>
        
        </div>
      </div>

     

      {/* Third Column */}
      <div className="flex-1 text-center">
        {/* Add any content you want in the third column */}
        <h1 className="flex-1 text-center"></h1>
      </div>
       {/* Second Column - Logo (Bigger) */}
       <div className="flex-2 flex items-center justify-center">
        <img className=" w-[75px] h-[75px] items-center mr-2.5" src="./assets/logo.png" alt="Logo" />
      </div>
    </div>
  </header>
  );
};

export default Header;
