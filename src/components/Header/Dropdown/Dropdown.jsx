import React, { useEffect, useRef } from 'react';
import { useAuth } from 'hooks/useAuth';
import { ItemNavbar } from 'components/common/privatePage/ItemNavbar';
import { Navigation } from 'components/common/privatePage/Navigation';
import { Avatar } from 'components/common/avatar/Avatar';
import * as S from './Dropdown.styled';

export const Dropdown = ( { isDropdown, setDropDown } ) => {
  const { user, isStudent, isTeacher } = useAuth();
  const { name, email } = user;
  const paddingNav = '16px 0 16px 20px';
  const borderRadiusNav = '60px 0 0 60px';

  const dropdownRef = useRef( null );

  useEffect( () => {
    const handleKeyDown = evt => {
      if ( evt.code === 'Escape' ) {
        setDropDown();
      }
    };
    window.addEventListener( 'keydown', handleKeyDown );
    return () => {
      window.removeEventListener( 'keydown', handleKeyDown );
    };
  }, [ setDropDown ] );

  useEffect( () => {
    if ( !isDropdown ) return;

    const handleClick = evt => {
      if ( !dropdownRef.current ) return;
      if ( !dropdownRef.current.contains( evt.target ) ) {
        // setDropDown();
      }
    };

    document.addEventListener( 'click', handleClick, true );

    return () => {
      document.removeEventListener( 'click', handleClick, true );
    };
  }, [ isDropdown, setDropDown ] );

  return (
    <S.Dropdown ref={ dropdownRef }>
      <S.DataUser>
        <Avatar $widthHeight="64px" $fontSize="20px" />
        <div>
          <S.Name>{name}</S.Name>
          <S.Email>{email}</S.Email>
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

//   return (
//     <S.Dropdown ref={ dropdownRef }>
//       <S.DataUser>
//         <Avatar $widthHeight="64px" $fontSize="20px" />
//         <div>
//           <S.Name>{name}</S.Name>
//           <S.Email>{email}</S.Email>
//         </div>
//       </S.DataUser>

//       {isStudent && (
//         <Navigation>
//           <ItemNavbar
//             linkTo="/student/info"
//             text="Особиста інформація"
//             icon="icon-profile-circle"
//             $padding={ paddingNav }
//             $borderRadius={ borderRadiusNav }
//           />
//           <ItemNavbar
//             linkTo="/student/reservation"
//             text="МоЇ бронювання"
//             icon="icon-calendar-tick"
//             $padding={ paddingNav }
//             $borderRadius={ borderRadiusNav }
//           />
//         </Navigation>
//       )}

//       {isTeacher && (
//         <Navigation>
//           <ItemNavbar
//             linkTo="/teacher/info"
//             text="Особиста інформація"
//             icon="icon-profile-circle"
//             $padding={ paddingNav }
//             $borderRadius={ borderRadiusNav }
//           />
//           <ItemNavbar
//             linkTo="/teacher/reservation"
//             text="МоЇ бронювання"
//             icon="icon-calendar-tick"
//             $padding={ paddingNav }
//             $borderRadius={ borderRadiusNav }
//           />
//           <ItemNavbar
//             linkTo="/teacher/calendar"
//             text="Календар"
//             icon="icon-calendar"
//             $padding={ paddingNav }
//             $borderRadius={ borderRadiusNav }
//           />
//           <ItemNavbar
//             linkTo="/teacher/feedback"
//             text="Відгуки"
//             icon="icon-Vector"
//             $padding={ paddingNav }
//             $borderRadius={ borderRadiusNav }
//           />
//           <ItemNavbar
//             linkTo="/teacher/tariff"
//             text="Тарифи"
//             icon="icon-slider-horizontal"
//             $padding={ paddingNav }
//             $borderRadius={ borderRadiusNav }
//           />
//         </Navigation>
//       )}
//     </S.Dropdown>
//   );
// };
