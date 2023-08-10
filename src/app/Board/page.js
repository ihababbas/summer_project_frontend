// components/Board.js
"use client";
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import styles from '../styles/Board.module.css';
import Footer from '../components/Footer';

const Board = () => {
  const values = ['الرَّحْمن','الرَّحِيم', 'المَلِك', 'الْقُدُّوس', 'السَّلَام', 'المُؤْمِن', 'الْمُهَيْمِن', 'الْعَزِيز', 'الْمُتَكَبِّر', 'الْجَبَّار'];
  const [cards, setCards] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false); // Start with timer off
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setTimeElapsed(0);
    setTimerRunning(true); 
    const timerInterval = setInterval(() => {
      if (timerRunning) {
        setTimeElapsed((prevTime) => prevTime + 1);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [timerRunning]);
  
  useEffect(() => {
    
    
    const selectedValues = selectRandomValues(values, 8);
    const duplicatedValues = selectedValues.concat(selectedValues);
    const initialCards = duplicatedValues.map((value) => ({
      value,
      flipped: false,
      matched: false,
    }));
    setTimeElapsed(0);
    setTimerRunning(true); // Start the timer when setting cards
    setCards(shuffleArray(initialCards));
     console.log(timeElapsed)
  }, []);

  useEffect(() => {
    
    const matchedCardCount = cards.filter((card) => card.matched).length;
    if (matchedCardCount === cards.length) {
      setTimerRunning(false); // Stop the timer when all cards are matched
    }
  }, [cards]);


  const selectRandomValues = (arr, count) => {
    const shuffledArr = shuffleArray(arr);
    return shuffledArr.slice(0, count);
  };

  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  console.log(timeElapsed)

const handleCardClick = (index) => {
  const clickedCard = cards[index];

  // If the clicked card is already matched or there are already 2 flipped cards, return early
  if (clickedCard.matched || flippedIndexes.length >= 2) {
    return;
  }

  setFlippedIndexes((prevIndexes) => [...prevIndexes, index]);
  setCards((prevCards) =>
    prevCards.map((card, i) =>
      i === index ? { ...card, flipped: true } : card
    )
  );
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
  
  const allCardsFlippedBack = cards.every((card) => card.flipped);
  if (allCardsFlippedBack) {
    setGameOver(true); // Set game over state to true
    setTimerRunning(false); // Stop the timer
  } else {
    setGameOver(false); // Reset game over state to false
  }
}, [flippedIndexes, cards]);

const playAgainFunction = () => {
  // Reset all cards to their initial state
  const initialCards = cards.map((card) => ({ ...card, flipped: false, matched: false }));
  setCards(shuffleArray(initialCards));
  
  // Reset other game states
  setFlippedIndexes([]);
  setTimeElapsed(0);
  setTimerRunning(true);
  setGameOver(false);
};


return (
  <div className="flex flex-col items-center justify-center h-screen bg-white pt-10">
    <div className={`${styles.timer} ${styles.middleLeft}`}>{timeElapsed} seconds</div>
    <div className={styles.board}>
      {cards.map((card, index) => (
        <Card
          key={index}
          value={card.value}
          flipped={card.flipped}
          matched={card.matched}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
    <Footer />
    {gameOver && (
      <div className={styles.popup}>
        <h2>انتهت اللعبة</h2>
        <p>مبارك ، لقت اتممت اللعبة</p>
        <button className={styles.popupButton} onClick={playAgainFunction}>
          اعادة اللعب
        </button>
      </div>
    )}
  </div>
);

};

export default Board;
