import React, { lazy, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import Theme from '../theme/Theme';
import Home from '../pages/HomePage';

import GeneralStyles from '../generalStyles';
import Layout from './Layout/Layout';
import { PersonalInfo } from 'components/StudentPage/PersonalInfo';
import { Reservation } from 'components/StudentPage/Reservation';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { getStudentProfile } from '../redux/auth/operations';

const Teachers = lazy( () => import( '../pages/TeacherPage' ) );
const About = lazy( () => import( '../pages/AboutUsPage' ) );
const Feedback = lazy( () => import( '../pages/FeedbackPage' ) );
const Student = lazy( () => import( '../pages/StudentPage' ) );
const Teacher = lazy( () => import( '../pages/TeacherProfilePage' ) );

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userRole, token } = useAuth();
  const isStudent = userRole === 'student';
  const isTeacher = userRole === 'teacher';

  useEffect( () => {
    if ( !token ) return;

    if ( isStudent ) {
      dispatch( getStudentProfile() );
      navigate( '/student/info' );
    }

    if ( isTeacher ) {
      // dispatch( getTeacherProfile() );
      navigate( '/teacher/info' );
    }
  }, [ userRole ] );

  return (
    <>
      <GeneralStyles />
      <Theme>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <Home /> } />
            <Route path="teachers" element={ <Teachers /> } />
            <Route path="about" element={ <About /> } />
            <Route path=" " element={ <Feedback /> } />

            {isStudent && (
              <Route
                path="student/"
                element={ <PrivateRoute component={ <Student /> } /> }
              >
                <Route path="info" element={ <PersonalInfo /> } />
                <Route path="reservation" element={ <Reservation /> } />
              </Route>
            )}

            {isTeacher && (
              <Route
                path="teacher/"
                element={ <PrivateRoute component={ <Teacher /> } /> }
              >
                <Route path="info" element=<h1>PersonalInfo</h1> />
                <Route path="reservation" element=<h1>Reservation</h1> />
                <Route path="calendar" element=<h1>Calendar</h1> />
                <Route path="feedback" element=<h1>Feedback</h1> />
                <Route path="tariff" element=<h1>Tariff</h1> />
              </Route>
            )}

            <Route path="*" element={ <Home /> } />
          </Route>
        </Routes>
      </Theme>
    </>
  );
};

export default App;
