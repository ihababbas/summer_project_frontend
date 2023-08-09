// components/Card.js
"use client";
import React from 'react';
import cardStyles from '../styles/Card.module.css';

const Card = ({ value, flipped, matched, onClick }) => {
  return (
    <div
      className={`${cardStyles.card} ${flipped ? cardStyles.flipped : ''} ${matched ? cardStyles.matched : ''}`}
      onClick={onClick}
    >
      <div className={cardStyles.inner}>
        <div className={cardStyles.face}>
          {flipped ? value : <img src="./assets/allah.png" alt="الله" />}
        </div>
        <div className={`${cardStyles.face} ${cardStyles.back}`}>
          {flipped ? value : ' '}
        </div>
      </div>
    </div>
  );
};

export default Card;
