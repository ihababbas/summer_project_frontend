'use client';


import Swal from 'sweetalert2';

import Footer from '../components/Footer';
import Link from 'next/link';

export default function startqustionsgame() {

  return (
  <>
  {/* Main Content */}
  <div className="flex flex-col items-center justify-center h-screen text-center mx-20 px-10  text-black ">


    <h2 className="text-3xl font-semibold mb-4">أسماء الله الحسنى</h2>

    {/* Paragraph */}
  
    <h4 className="text-2xl mb-4">  
فكرة هذا التحدي هي عبارة عن ايجاد الاسماء المشتابه عن طريق الضغط على الكرت واختبار قوة الذاكرة في بطاقات موزعة 4x4
</h4>
    {/* Buttons */}
    <div className="flex mt-4">
  
    <Link href={'/Board'}> <button className="bg-[#93BFCF] text-white px-4 py-2 rounded-lg mr-4">الى تحدي  </button> </Link>
   
    </div>
    </div>

 
  <Footer/>
  </>
 

  )

}
