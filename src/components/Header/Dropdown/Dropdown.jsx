import React from 'react';
import { useAuth } from 'hooks/useAuth';
// import { Abbreviation } from '../../common/Abbreviation';
// import { AvatarWrapper } from '../Header.styled';
import * as S from './Dropdown.styled';
import { ItemNavbar } from 'components/common/privatePage/ItemNavbar';
import { Navigation } from 'components/common/privatePage/Navigation';
import { AvatarLeters } from 'components/common/avatar/AvatarLeters';

export const Dropdown = () => {
  const { user, isStudent, isTeacher } = useAuth();
  const { name, email } = user;
  // const isStudent = userRole === 'student';
  // const isTeacher = userRole === 'teacher';
  const paddingNav = '16px 0 16px 20px';
  const borderRadiusNav = '60px 0 0 60px';

  return (
    <S.Dropdown>
      {/* !!! Replaced !!! */}
      {/* <S.PersonalData>
        <AvatarWrapper $dropdown>
          <Abbreviation $fontSize="20px" $fontWeight="500" $lineHeight="1.4" />
        </AvatarWrapper>
        <div className="meta-wrapper">
          <p className="name">{user?.name}</p>
          <p className="email">{user?.email}</p>
        </div>
      </S.PersonalData> */}

      <S.DataUser>
        <AvatarLeters />
        <div>
          <S.Name>{name}</S.Name>
          <S.Email>{email}</S.Email>
          {/* <S.Name>{user?.name}</S.Name>
          <S.Email>{user?.email}</S.Email> */}
        </div>
      </S.DataUser>

      {isStudent && (
        <Navigation>
          <ItemNavbar
            linkTo="/student/info"
            text="Особиста інформація"
            icon="icon-profile-circle"
            $padding={ paddingNav }
            $borderRadius={ borderRadiusNav }
          />
          <ItemNavbar
            linkTo="/student/reservation"
            text="МоЇ бронювання"
            icon="icon-calendar-tick"
            $padding={ paddingNav }
            $borderRadius={ borderRadiusNav }
          />
        </Navigation>
      )}

      {isTeacher && (
        <Navigation>
          <ItemNavbar
            linkTo="/teacher/info"
            text="Особиста інформація"
            icon="icon-profile-circle"
            $padding={ paddingNav }
            $borderRadius={ borderRadiusNav }
          />
          <ItemNavbar
            linkTo="/teacher/reservation"
            text="МоЇ бронювання"
            icon="icon-calendar-tick"
            $padding={ paddingNav }
            $borderRadius={ borderRadiusNav }
          />
          <ItemNavbar
            linkTo="/teacher/calendar"
            text="Календар"
            icon="icon-calendar"
            $padding={ paddingNav }
            $borderRadius={ borderRadiusNav }
          />
          <ItemNavbar
            linkTo="/teacher/feedback"
            text="Відгуки"
            icon="icon-Vector"
            $padding={ paddingNav }
            $borderRadius={ borderRadiusNav }
          />
          <ItemNavbar
            linkTo="/teacher/tariff"
            text="Тарифи"
            icon="icon-slider-horizontal"
            $padding={ paddingNav }
            $borderRadius={ borderRadiusNav }
          />
        </Navigation>
      )}
    </S.Dropdown>
  );
};
