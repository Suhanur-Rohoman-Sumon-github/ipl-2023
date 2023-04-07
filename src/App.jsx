import React from 'react';
import Header from './componnets/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './componnets/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;