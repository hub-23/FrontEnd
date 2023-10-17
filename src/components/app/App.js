import React from 'react';
import { Routes, Route } from 'react-router';

import Home from '../../pages/home/homePage';

import GeneralStyles from '../../generalStyles';

const App = () => {
  return (
    <>
      <GeneralStyles/>

      <Routes>
        <Route exact path='/' element={ <Home/> }/>
      </Routes>
    </>
  );
};

export default App;
