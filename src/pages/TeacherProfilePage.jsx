import React from 'react';
import { useSignout } from 'hooks/useSignout';
import { NavLink, Outlet } from 'react-router-dom';

const TeacherProfilePage = () => {
  const signout = useSignout();

  return (
    <>
      <h2 style={ { marginTop: '100px', fontSize: '30px' } }>
        TeacherProfilePage
      </h2>

      <NavLink to="/teacher/info">Особиста інформація</NavLink>
      <NavLink to="/teacher/reservation">МоЇ бронювання</NavLink>
      <NavLink to="/teacher/calendar">Календар</NavLink>
      <NavLink to="/teacher/feedback">Відгуки</NavLink>
      <NavLink to="/teacher/tariff">Тарифи</NavLink>
      <button type="button" onClick={ signout }>
        Вийти
      </button>

      <Outlet />
    </>
  );
};

export default TeacherProfilePage;
