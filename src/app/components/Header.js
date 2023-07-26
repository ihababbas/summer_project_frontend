import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Header = () => {
  return (
    <header className='fixed w-full bg-[#EEE9DA] text-center bold p-8 left-0 top-0'>
    {/* Your header content goes here */}
    <div class="grid grid-cols-3 gap-4">
    <div className='text-black shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] w-4/5 items-center ml-[60px] rounded-lg; bg-[#93BFCF]'>
    <h3 className=" font-semibold mb-2">Card Title</h3>
    <p>This is the card content.</p>
  
  </div>
<div ><h1>Fixed Header</h1></div>
<div >
  <img className={styles.logo} src="./assets/logo.png" alt="Logo" />
</div>

</div>


  
  </header>
  );
};

export default Header;
