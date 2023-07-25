import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className={styles.footer}>
       <div>
        <Link href="/"
          className={styles.aboutButton}>الرئيسية
        </Link>
      </div>
      <div className={styles.content}>
       
      </div>
      <div>
        <img className={styles.footerlogo} src="./assets/logo.png" alt="Logo" />
      </div>
    </footer>
  );
};

export default Footer;
