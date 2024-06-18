import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { ItemNavbar } from 'components/common/privatePage/ItemNavbar';
import { Navigation } from 'components/common/privatePage/Navigation';
import { Avatar } from 'components/common/avatar/Avatar';
import * as S from './DropdownMenu.styled';
import * as H from '../Header.styled';
import { IconSvg } from 'components/common/IconSvg';
import { useClickOutside } from 'hooks/useClickOutside';

export const DropdownMenu = () => {
  const { user, isStudent, isTeacher } = useAuth();
  const { name, email } = user;
  const paddingNav = '16px 0 16px 20px';
  const borderRadiusNav = '60px 0 0 60px';

  // const { ref, isShow, setIsShow } = useClickOutside( false );
  const [ isShow, setIsShow ] = useState( false );

  const dropdownRef = useRef( null );

  useClickOutside( dropdownRef, () => {
    if ( isShow ) setTimeout( () => setIsShow( false ), 150 );
  } );

  // useEffect( () => {
  //   if ( !isShow ) return;

  //   const handleClick = evt => {
  //     if ( !dropdownRef.current ) return;
  //     if ( !dropdownRef.current.contains( evt.target ) )
  //       setTimeout( () => setIsShow( false ), 10 );
  //   };

  //   document.addEventListener( 'click', handleClick, true );

  //   return () => {
  //     document.removeEventListener( 'click', handleClick, true );
  //   };
  // } );

  useEffect( () => {
    const handleKeyDown = evt => {
      if ( evt.code === 'Escape' ) {
        setIsShow( false );
      }
    };
    window.addEventListener( 'keydown', handleKeyDown );
    return () => {
      window.removeEventListener( 'keydown', handleKeyDown );
    };
  }, [ isShow ] );

  return (
    <div style={ { position: 'relative' } }>
      <H.DropdownBtn
        type="button"
        aria-label="dropdown-menu"
        onClick={ () => setIsShow( !isShow ) }
      >
        <H.ContentBtnDropdown>
          <Avatar $widthHeight="32px" $fontSize="14px" />
          <H.TextBtn>Моя сторінка</H.TextBtn>
          <IconSvg
            width="11px"
            height="11px"
            icon="icon-arrow-down"
            $transformRotate={ isShow }
          />
        </H.ContentBtnDropdown>
      </H.DropdownBtn>

      <div ref={ dropdownRef }>
        {isShow && (
          <S.Dropdown>
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
        )}
      </div>
    </div>
  );
};

// export const DropdownMenu = () => {
//   const { user, isStudent, isTeacher } = useAuth();
//   const { name, email } = user;
//   const paddingNav = '16px 0 16px 20px';
//   const borderRadiusNav = '60px 0 0 60px';

//   // const { isTest, setIsTest } = useTest( true );
//   // console.log( 'isTest :>> ', isTest );

//   const [ isShow, setIsShow ] = useState( false );

//   const dropdownRef = useRef( null );

//   useEffect( () => {
//     if ( !isShow ) return;

//     const handleClick = evt => {
//       if ( !dropdownRef.current ) return;
//       if ( !dropdownRef.current.contains( evt.target ) )
//         setTimeout( () => setIsShow( false ), 10 );
//     };

//     document.addEventListener( 'click', handleClick, true );

//     return () => {
//       document.removeEventListener( 'click', handleClick, true );
//     };
//   } );

//   useEffect( () => {
//     const handleKeyDown = evt => {
//       if ( evt.code === 'Escape' ) {
//         setIsShow( false );
//       }
//     };
//     window.addEventListener( 'keydown', handleKeyDown );
//     return () => {
//       window.removeEventListener( 'keydown', handleKeyDown );
//     };
//   }, [ isShow ] );

//   return (
//     <div style={ { position: 'relative' } }>
//       <H.DropdownBtn
//         type="button"
//         aria-label="dropdown-menu"
//         // onClick={ () => setIsShow( !isShow ) }
//         onClick={ () => {
//           setIsShow( !isShow );
//           // setIsTest( !isTest );
//         } }
//       >
//         <H.ContentBtnDropdown>
//           <Avatar $widthHeight="32px" $fontSize="14px" />
//           <H.TextBtn>Моя сторінка</H.TextBtn>
//           <IconSvg
//             width="11px"
//             height="11px"
//             icon="icon-arrow-down"
//             $transformRotate={ isShow }
//           />
//         </H.ContentBtnDropdown>
//       </H.DropdownBtn>

//       <div ref={ dropdownRef }>
//         {isShow && (
//           <S.Dropdown>
//             <S.DataUser>
//               <Avatar $widthHeight="64px" $fontSize="20px" />
//               <div>
//                 <S.Name>{name}</S.Name>
//                 <S.Email>{email}</S.Email>
//               </div>
//             </S.DataUser>

//             {isStudent && (
//               <Navigation>
//                 <ItemNavbar
//                   linkTo="/student/info"
//                   text="Особиста інформація"
//                   icon="icon-profile-circle"
//                   $padding={ paddingNav }
//                   $borderRadius={ borderRadiusNav }
//                 />
//                 <ItemNavbar
//                   linkTo="/student/reservation"
//                   text="МоЇ бронювання"
//                   icon="icon-calendar-tick"
//                   $padding={ paddingNav }
//                   $borderRadius={ borderRadiusNav }
//                 />
//               </Navigation>
//             )}

//             {isTeacher && (
//               <Navigation>
//                 <ItemNavbar
//                   linkTo="/teacher/info"
//                   text="Особиста інформація"
//                   icon="icon-profile-circle"
//                   $padding={ paddingNav }
//                   $borderRadius={ borderRadiusNav }
//                 />
//                 <ItemNavbar
//                   linkTo="/teacher/reservation"
//                   text="МоЇ бронювання"
//                   icon="icon-calendar-tick"
//                   $padding={ paddingNav }
//                   $borderRadius={ borderRadiusNav }
//                 />
//                 <ItemNavbar
//                   linkTo="/teacher/calendar"
//                   text="Календар"
//                   icon="icon-calendar"
//                   $padding={ paddingNav }
//                   $borderRadius={ borderRadiusNav }
//                 />
//                 <ItemNavbar
//                   linkTo="/teacher/feedback"
//                   text="Відгуки"
//                   icon="icon-Vector"
//                   $padding={ paddingNav }
//                   $borderRadius={ borderRadiusNav }
//                 />
//                 <ItemNavbar
//                   linkTo="/teacher/tariff"
//                   text="Тарифи"
//                   icon="icon-slider-horizontal"
//                   $padding={ paddingNav }
//                   $borderRadius={ borderRadiusNav }
//                 />
//               </Navigation>
//             )}
//           </S.Dropdown>
//         )}
//       </div>
//     </div>
//   );
// };
