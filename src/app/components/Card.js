// components/Card.js
"use client";
import {React,useState} from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ value, flipped, onClick }) => {
 
  return (
    <div
      className={`${styles.card} ${flipped ? styles.flipped : ''} `}
      onClick={onClick}
    >
      <div className={styles.inner}>
        <div className={styles.face}>
        {flipped ? ' ' : <img src="./assets/allah.png" alt="الله" />}
        </div>
        <div className={`${styles.face} ${styles.back}`}>
          {/* You can include a mirrored version of the front face content here */}
          {flipped ? value : ' '}
        </div>
      </div>
    </div>
  );
};

export default Card;
