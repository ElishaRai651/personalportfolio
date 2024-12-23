// src/components/Layout.jsx (assuming this is where you're writing the Layout component)
import React from 'react';
import Header from './components/Header/Header';  // The '.jsx' extension can often be omitted
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
