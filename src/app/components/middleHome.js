import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home = () => {
  return (
    <main className={styles.Heromain}>
    {/* Your main content goes here */}
    <div className={styles.Herocontainer}>
    <div className={styles.Herocard}>
      <Link href={'/startqustionsgame'}><img src="./assets/image1.jpg" alt="Image 1" />
      <h2>تحدي الاسئلة</h2> </Link>
    </div>
    <div className={styles.Herocard}>
    <Link href={'/startgametow'}><img src="./assets/quran.png" alt="Image 2" />
      <h2>ترتيب السور</h2> </Link>
    </div>
    <div className={styles.Herocard}>
    <Link href={'/startgamethree'}><img src="./assets/asmaa.png" alt="Image 3" />
      <h2>أسماء الله الحسنى</h2> </Link>
    </div>
  </div>

  </main>
  );
};

export default Home;
