'use client';


import Swal from 'sweetalert2';

import React , {useState} from "react"; 
import Footer from '../components/Footer';
import Link from 'next/link';

export default function oneplayer() {
    const [Playerone, setPlayerone] = useState('');
    const [Playertow, setPlayertow] = useState('');

  return (

  <>
  
  <div className="flex flex-col items-center justify-center h-screen  text-black">
      {/* Static Image */}
      <img className="w-32 h-32 mb-6" src="./assets/VS.png" alt="Static Image" />

      {/* Email Input */}
      <input
        type="name"
        placeholder="اللاعب الاول"
        className="w-64 p-2 border-4 rounded-lg mb-6"
        value={Playerone}
        onChange={(e) => setPlayerone(e.target.value)}
      />
          <input
        type="name"
        placeholder="اللاعب الثاني"
        className="w-64 p-2 border-4 rounded-lg mb-6"
        value={Playertow}
        onChange={(e) => setPlayertow(e.target.value)}
      />
      {/* Login Button */}
      
      <Link href={"/coin"} ><button className="bg-[#93BFCF] text-black py-2 px-4 rounded-lg">
        أبدأ اللعبة
      </button> </Link>
    </div>
 
  <Footer/>
  </>
  )

}