import React from 'react';
import { Routes, Route } from 'react-router';
import Theme from '../../theme/Theme';
import Home from '../../pages/Home';

import GeneralStyles from '../../generalStyles';
import Layout from '../Layout/Layout';
import Student from '../../pages/Student/Student';
import Teacher from '../../pages/Teacher/Teacher';
import NoMatch from '../NoMatch';
import About from '../../pages/About/AboutUs';

const App = () => {
  return (
    <>
      <GeneralStyles />
      <Theme>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <Home /> } />
            <Route path="teacher" element={ <Teacher /> } />
            <Route path="about" element={ <About /> } />
            <Route path="feedback" element={ <h1>Feedback</h1> } />
            <Route path="language" element={ <h1>List of language</h1> } />
            <Route path="signIn" element={ <h1>Вхід</h1> } />
            <Route path="student" element={ <Student /> } />
            <Route path="*" element={ <NoMatch /> } />
          </Route>
        </Routes>
      </Theme>
    </>
  );
};

export default App;
