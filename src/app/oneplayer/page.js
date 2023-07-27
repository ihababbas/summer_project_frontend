'use client';


import Swal from 'sweetalert2';

import React , {useState} from "react"; 
import Footer from '../components/Footer';
import Link from 'next/link';

export default function oneplayer() {
    const [Playesname, setPlayesname] = useState('');

  return (

  <>
  
  <div className="flex flex-col items-center justify-center h-screen  text-black">
      {/* Static Image */}
      <img className="w-32 h-32 mb-6" src="./assets/login.png" alt="Static Image" />

      {/* Email Input */}
      <input
        type="name"
        placeholder="اسم اللاعب"
        className="w-64 p-2 border-4 rounded-lg mb-6"
        value={Playesname}
        onChange={(e) => setPlayesname(e.target.value)}
      />

      {/* Login Button */}
      <Link href={"/level"} ><button className="bg-[#93BFCF] text-black py-2 px-4 rounded-lg" >
        أبدأ اللعبة
      </button> </Link>
    </div>
 
  <Footer/>
  </>
  )

}