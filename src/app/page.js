import React from 'react';
import Header from './components/HomeHeader';
import Footer from './components/HomeFooter';
import Midlle from './components/middleHome'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      
      <Midlle />
     
      <Footer />
    </>
  );
};

export default Layout;
