import React from 'react';
import PrivatePage from 'components/common/privatePage/PrivatePage';
import { ItemNavbar } from 'components/common/privatePage/ItemNavbar';

const StudentPage = () => {
  return (
    <PrivatePage>
      <ItemNavbar
        linkTo="/student/info"
        text="Особиста інформація"
        icon="icon-profile-circle"
      />
      <ItemNavbar
        linkTo="/student/reservation"
        text="МоЇ бронювання"
        icon="icon-calendar-tick"
      />
    </PrivatePage>
  );
};

export default StudentPage;
