import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className={styles.footer}>
       <div>
        <Link href="/about"
          className={styles.aboutButton}>About
        </Link>
      </div>
      <div className={styles.content}>
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
      <div>
        <img className={styles.footerlogo} src="./assets/logo.png" alt="Logo" />
      </div>
    </footer>
  );
};

export default Footer;
