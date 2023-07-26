import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className={styles.Herofooter}>
            <div class="grid grid-cols-3 gap-4">
          
  <div >  <button className='bg-[#93BFCF] text-[black]  text-center no-underline inline-block text-base ml-[30px] px-8 py-[15px] border-[none];' type="button">Click Me!</button>

  </div>  
  <div > <p>Footer content</p></div>
  <div >   <img className={styles.logo} src="./assets/logo.png" alt="Logo" /></div>

</div>
        </footer>
   
  );
};

export default Footer;
