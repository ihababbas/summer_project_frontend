import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <main className={styles.Heromain}>
    {/* Your main content goes here */}
    <div className={styles.Herocontainer}>
    <div className={styles.Herocard}>
      <img src="./assets/image1.jpg" alt="Image 1" />
      <h2>Card 1</h2>
    </div>
    <div className={styles.Herocard}>
      <img src="./assets/quran.png" alt="Image 2" />
      <h2>Card 2</h2>
    </div>
    <div className={styles.Herocard}>
      <img src="./assets/asmaa.png" alt="Image 3" />
      <h2>Card 3</h2>
    </div>
  </div>

  </main>
  );
};

export default Home;
