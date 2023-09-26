import React from 'react';
import { Routes, Route } from 'react-router';

import Home from '../../pages/home/homePage';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={ <Home/> }/>
      </Routes>
    </>
  );
};

export default App;
