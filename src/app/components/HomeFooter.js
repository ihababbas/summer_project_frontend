'use client';

import React, { useState, useEffect  } from 'react';
import styles from '../styles/Home.module.css';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const [randomAdkar, setRandomAdkar] = useState('');


  useEffect(() => {
    // Function to select a random "adkar" from the array
    const selectRandomAdkar = () => {
      const adkar = [
        {
          "dker": "استغفر الله"
        },
        {
          "dker": "سبحان الله"
      },
      {
          "dker": "الله أكبر"
      },
      {
          "dker": "الحمدلله"
      },
      {
          "dker": "لا اله إلا الله"
      },
      {
          "dker": "لا حول ولا قوة الا بالله"
      },
      {
          "dker": "سبحان الله وبحمده سبحان الله العظيم"
      },
      {
          "dker": "اللهم صل على سيدنا محمد"
      },
      {
          "dker": "إنا لله وإنا إليه راجعون"
      },
      {
          "dker": "اللهم يا مقلب القلوب ثبت قلبي على دينك"
      },
        
      ];

      const randomIndex = Math.floor(Math.random() * adkar.length);
      setRandomAdkar(adkar[randomIndex].dker);
    };

    selectRandomAdkar();
  }, []);

  return (
    <footer className={styles.Herofooter}>
    {/* Your footer content goes here */}
    <div class="grid grid-cols-3 gap-4 items-center">
  <div>  <Link href={'/about'}>< button className='bg-[#93BFCF] text-xs text-[black] text-center no-underline inline-block text-base ml-[30px] px-8  py-2 border-[none];' type="button">من نحن</button> </Link>
  <Link href={'/login'}> <button className='bg-[#93BFCF] text-xs text-[black] text-center no-underline inline-block text-base ml-[30px] px-8 py-2 border-[none];' type="button">لوحة التحكم</button> </Link>
            </div>

<div className='text-center py-5'> <p>{randomAdkar}</p></div>
<div >   <img className={styles.logo} src="./assets/logo.png" alt="Logo" /></div>

</div>
   
  </footer>
  );
};

export default Footer;
