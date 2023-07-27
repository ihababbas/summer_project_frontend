'use client';


import Swal from 'sweetalert2';

import Footer from '../components/Footer';
import Link from 'next/link';

export default function startqustionsgame() {

  return (
  <>
  {/* Main Content */}
  <div className="flex flex-col items-center justify-center h-screen text-center mx-20 px-10  text-black ">


    <h2 className="text-3xl font-semibold mb-4"> لاعب واحد</h2>


    <div className="flex mt-4">
  
    <Link href={'/waiting'}> <button className="bg-[#93BFCF] text-white px-4 py-2 rounded-lg mr-4">صعب</button> </Link>
    <Link href={'/waiting'}> <button className="bg-[#93BFCF] text-white px-4 py-2 rounded-lg mr-4">متوسط</button> </Link>
    <Link href={'/waiting'}><button className="bg-[#93BFCF] text-white px-4 py-2 rounded-lg ">سهل</button> </Link> 
    </div>
    </div>

 
  <Footer/>
  </>
 

  )

}
