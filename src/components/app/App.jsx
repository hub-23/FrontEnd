import React from 'react';
import { Routes, Route } from 'react-router';
import Theme from '../../theme/Theme';
import Home from '../../pages/HomePage';

import GeneralStyles from '../../generalStyles';
import Layout from '../Layout/Layout';
import About from '../../pages/AboutUsPage';
import Student from '../../pages/StudentPage';
import Teacher from '../../pages/TeachersPage';
import FeedbackPage from '../../pages/FeedbackPage';

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
            <Route path="feedback" element={ <FeedbackPage /> } />
            {/* <Route path="language" element={ <h1>List of language</h1> } /> */}
            <Route path="signIn" element={ <h1>Вхід</h1> } />
            <Route path="student" element={ <Student /> } />
            <Route path="*" element={ <Home /> } />
          </Route>
        </Routes>
      </Theme>
    </>
  );
};

export default App;
