import Head from 'next/head';

//import style from './home.css';
import style from '/home/ihababbas/summer_project_frontend/src/app/styles/Home.module.css'

const Home = () => {

      return (
        <div className={style.App}>
            <header className={style.header}>
          {/* Your header content goes here */}
          <h1>Fixed Header</h1>
        </header>
        <main className={style.main}>
          {/* Your main content goes here */}
          <div className={style.container}>
          <div className={style.card}>
            <img src="./assets/image1.jpg" alt="Image 1" />
            <h2>Card 1</h2>
          </div>
          <div className={style.card}>
            <img src="./assets/quran.png" alt="Image 2" />
            <h2>Card 2</h2>
          </div>
          <div className={style.card}>
            <img src="./assets/asmaa.png" alt="Image 3" />
            <h2>Card 3</h2>
          </div>
        </div>
    
        </main>
        <footer className={style.footer}>
          {/* Your footer content goes here */}
          <p>Footer content</p>
        </footer>
        </div>
      );
    }
    
 

export default Home;