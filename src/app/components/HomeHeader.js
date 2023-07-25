import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
     <div className={styles.headercardContainer}>
        <div className={styles.heaedercard}>
          <h3>Card Title</h3>
          <p>This is a small card with some text.</p>
          <div className={styles.headerbuttonContainer}>
            <a href="#" className={styles.headerbutton}>لوحة التحكم</a>
          </div>
        </div>
      </div>

      <div >
        <p>This is a scrolling news ticker!</p>
      </div>

      <div>
        <img className={styles.logo} src="./assets/logo.png" alt="Logo" />
      </div>
    </header>
  );
};

export default Header;
