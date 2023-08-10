'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { ayat } from './data/ayat';

const Header = () => {
  const [tickerText, setTickerText] = useState('');
  const [gregorianDate, setGregorianDate] = useState('');
  const [hijriDate, setHijriDate] = useState('');
  useEffect(() => {
    // انضم جميع الآيات متتالية في سلسلة واحدة لعرضها في التيكر
    const concatenatedAyat = ayat.join('  |  ');

    // أنشئ دالة لتكرار الآيات باستمرار من اليمين إلى اليسار
    const scrollTicker = () => {
      setTickerText((prevText) => {
        return prevText.length === 0
          ? concatenatedAyat
          : prevText.slice(1) + prevText.charAt(0);
      });
    };

    // تحديد الوقت بين كل دورة لعرض النص بالتيكر
    const interval = setInterval(scrollTicker, 100); // يمكنك ضبط هذه القيمة بحسب التفضيلات

    return () => clearInterval(interval); // التنظيف عند الانتهاء من العرض

  }, []);


  useEffect(() => {
    // Get the current Gregorian date
    const currentDate = new Date();
    const currentGregorianDate = currentDate.toDateString();
    
    // Get the current date in the format MM-DD-YYYY
    const formattedCurrentDate = currentDate.toISOString().slice(5, 10) + '-' + currentDate.getFullYear();

    // Fetch the Hijri date using the API
    fetch(`http://api.aladhan.com/v1/gToH/${formattedCurrentDate}`)
      .then(response => response.json())
      .then(data => {
        if (data.data && data.data.hijri) {
          setHijriDate(data.data.hijri.date);
          setGregorianDate(currentGregorianDate);
        }
      })
      .catch(error => {
        console.error('Error fetching Hijri date:', error);
      });
  }, []);
  
  
  
  
  return (
    <header className='fixed w-full bg-[#EEE9DA] text-center item-bold p-8 left-0 top-0'>
    {/* Your header content goes here */}
    <div className="grid grid-cols-3 gap-4">
    <div className='text-black shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] w-3/5 items-center ml-[60px] rounded-lg; bg-[#93BFCF]'>
    <h3 className=" font-semibold mb-2">التاريخ الهجري: {hijriDate} </h3>
    <p>التاريخ الميلادي: {gregorianDate} </p>
  
  </div>
<div>

<div className={styles.newstickercontainer}>
      <div className={styles.tickertext}>{tickerText}</div>
    </div>
 

    </div>
  


<div >
  <img className={styles.logo} src="./assets/logo.png" alt="Logo" />
</div>

</div>



  
  </header>
  );
};

export default Header;
