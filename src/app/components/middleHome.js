import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="./assets/image1.jpg" alt="Image 1" />
        <h2>Card 1</h2>
      </div>
      <div className={styles.card}>
        <img src="./assets/quran.png" alt="Image 2" />
        <h2>Card 2</h2>
      </div>
      <div className={styles.card}>
        <img src="./assets/asmaa.png" alt="Image 3" />
        <h2>Card 3</h2>
      </div>
    </div>
  );
};

export default Home;
