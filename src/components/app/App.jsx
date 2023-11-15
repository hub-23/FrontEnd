import React from 'react';
import { Routes, Route } from 'react-router';
import Theme from '../../theme/Theme';
import Home from '../../pages/HomePage';

import GeneralStyles from '../../generalStyles';

const App = () => {
  return (
    <>
      <GeneralStyles />
      <Theme>
        <Routes>
          <Route exact path='/*' element={ <Home /> } />
        </Routes>
      </Theme>
    </>
  );
};

export default App;
