import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { Abbreviation } from '../../common/Abbreviation';
import * as S from './Dropdown.styled';
import { AvatarWrapper } from '../Header.styled';
import { ItemNavbar } from 'components/common/privatePage/ItemNavbar';
import { Navigation } from 'components/common/privatePage/Navigation';

export const Dropdown = () => {
  const { user, userRole } = useAuth();
  const isStudent = userRole === 'student';
  const isTeacher = userRole === 'teacher';

  return (
    <S.Dropdown>
      <S.PersonalData>
        <AvatarWrapper $dropdown>
          <Abbreviation $fontSize="20px" $fontWeight="500" $lineHeight="1.4" />
        </AvatarWrapper>
        <div className="meta-wrapper">
          <p className="name">{user?.name}</p>
          <p className="email">{user?.email}</p>
        </div>
      </S.PersonalData>

      {isStudent && (
        <Navigation>
          <ItemNavbar
            linkTo="/student/info"
            text="Особиста інформація"
            icon="icon-profile-circle"
            $padding="16px 0 16px 20px"
            $borderRadius="60px 0 0 60px"
          />
          <ItemNavbar
            linkTo="/student/reservation"
            text="МоЇ бронювання"
            icon="icon-calendar-tick"
            $padding="16px 0 16px 20px"
            $borderRadius="60px 0 0 60px"
          />
        </Navigation>
      )}

      {isTeacher && (
        <Navigation>
          <ItemNavbar
            linkTo="/teacher/info"
            text="Особиста інформація"
            icon="icon-profile-circle"
            $padding="16px 0 16px 20px"
            $borderRadius="60px 0 0 60px"
          />
          <ItemNavbar
            linkTo="/teacher/reservation"
            text="МоЇ бронювання"
            icon="icon-calendar-tick"
            $padding="16px 0 16px 20px"
            $borderRadius="60px 0 0 60px"
          />
          <ItemNavbar
            linkTo="/teacher/calendar"
            text="Календар"
            icon="icon-calendar"
            $padding="16px 0 16px 20px"
            $borderRadius="60px 0 0 60px"
          />
          <ItemNavbar
            linkTo="/teacher/feedback"
            text="Відгуки"
            icon="icon-Vector"
            $padding="16px 0 16px 20px"
            $borderRadius="60px 0 0 60px"
          />
          <ItemNavbar
            linkTo="/teacher/tariff"
            text="Тарифи"
            icon="icon-slider-horizontal"
            $padding="16px 0 16px 20px"
            $borderRadius="60px 0 0 60px"
          />
        </Navigation>
      )}
    </S.Dropdown>
  );
};
