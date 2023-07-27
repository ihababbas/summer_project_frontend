'use client';

import React , {useState} from "react"; 
import Swal from 'sweetalert2';

import Footer from '../components/Footer';
import Link from 'next/link';

export default function startqustionsgame() {
    const [outcome, setOutcome] = useState('');

    const handleFlip = () => {
      const randomOutcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
      setOutcome(randomOutcome);
    }
  return (
  <>
  {/* Main Content */}
  <div className="flex flex-col items-center justify-center h-screen text-center mx-20 px-10  text-black ">


    <h2 className="text-3xl font-semibold mb-4"> لاعب الاول</h2>
    <h2 className="text-3xl font-semibold mb-4"> لاعب الثاني</h2>

    <div className="flex flex-col items-center mt-8">
    <Link href={'/waiting'}> <button
        onClick={handleFlip}
        className="bg-[#93BFCF] text-black py-2 px-4 rounded-lg"
      >
        Flip Coin
      </button> </Link>
      {outcome && <p className="mt-4 text-xl">The coin landed on: {outcome}</p>}
    </div>
     
    </div>

 
  <Footer/>
  </>
 

  )

}
