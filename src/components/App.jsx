import React, { lazy } from 'react';
import { Routes, Route } from 'react-router';
import Theme from '../theme/Theme';
import Home from '../pages/HomePage';

import GeneralStyles from '../generalStyles';
import Layout from './Layout/Layout';
import { PersonalInfo } from 'components/StudentPage/PersonalInfo';
import { Reservation } from 'components/StudentPage/Reservation';
import { Out } from 'components/StudentPage/Out';

const Teacher = lazy( () => import( '../pages/TeachersPage' ) );
const About = lazy( () => import( '../pages/AboutUsPage' ) );
const Feedback = lazy( () => import( '../pages/FeedbackPage' ) );
const Student = lazy( () => import( '../pages/StudentPage' ) );

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
            <Route path="feedback" element={ <Feedback /> } />
            {/* <Route path='language' element={ <h1>List of language</h1> } /> */}
            <Route path="signIn" element={ <h1>Вхід</h1> } />
            <Route path="student/" element={ <Student /> }>
              <Route path="info" element={ <PersonalInfo /> } />
              <Route path="reservation" element={ <Reservation /> } />
              <Route path="out" element={ <Out /> } />
            </Route>
            <Route path="*" element={ <Home /> } />
          </Route>
        </Routes>
      </Theme>
    </>
  );
};

export default App;
