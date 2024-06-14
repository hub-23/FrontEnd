import React from 'react';
import PrivatePage from 'components/common/privatePage/PrivatePage';
import { ItemNavbar } from 'components/common/privatePage/ItemNavbar';

const TeacherPage = () => {
  return (
    <PrivatePage>
      <ItemNavbar
        linkTo="/teacher/info"
        text="Особиста інформація"
        icon="icon-profile-circle"
      />
      <ItemNavbar
        linkTo="/teacher/reservation"
        text="МоЇ бронювання"
        icon="icon-calendar-tick"
      />
      <ItemNavbar
        linkTo="/teacher/calendar"
        text="Календар"
        icon="icon-calendar"
      />
      <ItemNavbar
        linkTo="/teacher/feedback"
        text="Відгуки"
        icon="icon-Vector"
      />
      <ItemNavbar
        linkTo="/teacher/tariff"
        text="Тарифи"
        icon="icon-slider-horizontal"
      />
    </PrivatePage>
  );
};

export default TeacherPage;
