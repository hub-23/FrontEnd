import React, { lazy, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import Theme from '../theme/Theme';
import Home from '../pages/HomePage';

import GeneralStyles from '../generalStyles';
import Layout from './Layout/Layout';
import { PersonalInfo } from 'components/StudentPage/PersonalInfo';
import { Reservation } from 'components/StudentPage/Reservation';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { getStudentProfile } from '../redux/auth/operations';
import { Booking, Calendar, ProfileDetails, Responses, Tarrifs } from './TeacherProfilePage';

const Teacher = lazy( () => import( '../pages/TeachersPage' ) );
const About = lazy( () => import( '../pages/AboutUsPage' ) );
const Feedback = lazy( () => import( '../pages/FeedbackPage' ) );
const Student = lazy( () => import( '../pages/StudentPage' ) );
const TeacherProfilePage = lazy( () => import( '../pages/TeacherProfilePage' ) );

const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, token } = useAuth();
  const navigate = useNavigate();

  useEffect( () => {
    if ( isLoggedIn || token ) {
      dispatch( getStudentProfile() );
      navigate( '/student/info' );
    }
  }, [ isLoggedIn, token ] );

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
            {/* NOT NEEDED <Route path="signin" element={ <h1>Вхід</h1> } />  */}

            {/* <Route path="student/" element={ <Student /> }> */}
            <Route path="teacher/"
            element={ <TeacherProfilePage /> }
              // element={ <PrivateRoute component={ <TeacherProfilePage /> } redirectTo="/" /> }
            >
                <Route path="profile" element={ <ProfileDetails /> } />
                <Route path="booking" element={ <Booking /> } />
                <Route path="calendar" element={ <Calendar /> } />
                <Route path="responses" element={ <Responses /> } />
                <Route path="tarrifs" element={ <Tarrifs /> } />
            </Route>
            <Route
              path="student/"
              element={ <PrivateRoute component={ <Student /> } redirectTo="/" /> }
            >
              <Route path="info" element={ <PersonalInfo /> } />
              <Route path="reservation" element={ <Reservation /> } />
            </Route>
            <Route path="*" element={ <Home /> } />
          </Route>
        </Routes>
      </Theme>
    </>
  );
};

export default App;
