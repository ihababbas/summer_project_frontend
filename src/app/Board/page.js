// components/Board.js
"use client";
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import styles from '../styles/Board.module.css';
import Footer from '../components/Footer';

const Board = () => {
  const values = ['الرَّحْمن','الرَّحِيم', 'المَلِك', 'الْقُدُّوس', 'السَّلَام', 'المُؤْمِن', 'الْمُهَيْمِن', 'الْعَزِيز'];
  const [cards, setCards] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);



  useEffect(() => {
    // Initialize the cards in pairs
    const initialCards = values.concat(values).map((value) => ({
      value,
      flipped: false,
    }));
    setCards(shuffleCards(initialCards)); // Shuffle the cards before setting
  }, []);

  // Shuffle cards using the Fisher-Yates (Knuth) algorithm
  const shuffleCards = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  };

  const handleCardClick = (index) => {
    if (flippedIndexes.length < 2) {
      setFlippedIndexes((prevIndexes) => [...prevIndexes, index]);
      setCards((prevCards) =>
        prevCards.map((card, i) =>
          i === index ? { ...card, flipped: true } : card
        )
      );
    }
  };

  useEffect(() => {
    if (flippedIndexes.length === 2) {
      const [index1, index2] = flippedIndexes;
      if (cards[index1].value === cards[index2].value) {
        // Match found
        setFlippedIndexes([]);
      } else {
        // No match, flip cards back
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card, i) =>
              i === index1 || i === index2 ? { ...card, flipped: false } : card
            )
          );
          setFlippedIndexes([]);
        }, 1000);
      }
    }
  }, [flippedIndexes]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white pt-10">
    <div className={styles.board}>
      {cards.map((card, index) => (
        <Card
          key={index}
          value={card.value}
          flipped={card.flipped}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
    <Footer/>
    </div>
  );
};

export default Board;
