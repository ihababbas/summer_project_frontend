'use client';

import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

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
          "dker": "إنا لله وإنا إلبه راجعون"
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
    <div class="grid grid-cols-3 gap-4">
    <div >  <button className='bg-[#93BFCF] text-[black]  text-center no-underline inline-block text-base ml-[30px] px-8 py-[15px] border-[none];' type="button">Click Me!</button>
<button className='bg-[#93BFCF] text-[black] text-center no-underline inline-block text-base ml-[30px] px-8 py-[15px] border-[none];' type="button">Click Me!</button></div>
<div > <p>{randomAdkar}</p></div>
<div >   <img className={styles.logo} src="./assets/logo.png" alt="Logo" /></div>

</div>
   
  </footer>
  );
};

export default Footer;
