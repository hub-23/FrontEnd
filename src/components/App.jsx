import React, { lazy, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import Theme from '../theme/Theme';
import Home from '../pages/HomePage';

import GeneralStyles from '../generalStyles';
import Layout from './Layout/Layout';
import { PersonalInfo } from 'components/StudentPage/PersonalInfo';
import { Reservation } from 'components/StudentPage/Reservation';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from 'hooks/useAuth';
import { getStudentProfile, getTeacherProfile } from '../redux/auth/operations';
import { PersonalInfoTeacher } from './TeacherProfilePage/PersonalInfo/PersonalInfoTeacher';
import { ReservationTeacher } from './TeacherProfilePage/Reservation/ReservationTeacher';
import { CalendarTeacher } from './TeacherProfilePage/Calendar/CalendarTeacher';
import { FeedbackTeacher } from './TeacherProfilePage/Feedback/FeedbackTeacher';
import { TariffsTeacher } from './TeacherProfilePage/Tariffs/TariffsTeacher';

const Teachers = lazy( () => import( '../pages/TeachersPage' ) );
const About = lazy( () => import( '../pages/AboutUsPage' ) );
const Feedback = lazy( () => import( '../pages/FeedbackPage' ) );
const Student = lazy( () => import( '../pages/StudentPage' ) );
const Teacher = lazy( () => import( '../pages/TeacherPage' ) );

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isStudent, isTeacher, token } = useAuth();

  useEffect( () => {
    if ( !token ) return;

    if ( isStudent ) {
      dispatch( getStudentProfile() );
      navigate( '/student/info' );
    }

    if ( isTeacher ) {
      dispatch( getTeacherProfile() );
      navigate( '/teacher/info' );
    }
  }, [ isStudent, isTeacher ] );

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
                <Route path="info" element={ <PersonalInfoTeacher /> } />
                <Route path="reservation" element={ <ReservationTeacher /> } />
                <Route path="calendar" element={ <CalendarTeacher /> } />
                <Route path="feedback" element={ <FeedbackTeacher /> } />
                <Route path="tariff" element={ <TariffsTeacher /> } />
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
