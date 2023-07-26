'use client';


import React from 'react';

import Header from './components/HomeHeader';
import Footer from './components/HomeFooter';
import Middle from './components/middleHome';
import style from './styles/Home.module.css'


const Layout = ({ children }) => {
  return (
    <>
    
     <Header/>
     <Middle/>
      <Footer/>
       
    </>
  );
};

export default Layout;