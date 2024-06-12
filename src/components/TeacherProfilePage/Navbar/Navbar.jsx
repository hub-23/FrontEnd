import React from 'react';
import { IconSvg } from 'components/common/IconSvg';
import { useSignout } from 'hooks/useSignout';
import * as S from './Navbar.styled';

export const Navbar = () => {
  const signout = useSignout();

  return (
    <ul>
      <li>
        <S.Link to="/teacher/info">
          <IconSvg
            xlWidth="24px"
            xlHeight="24px"
            $fill="none"
            $stroke="currentColor"
            icon="icon-profile-circle"
          />
          <S.Text>Особиста інформація</S.Text>
        </S.Link>
      </li>

      <li>
        <S.Link to="/teacher/reservation">
          <IconSvg
            xlWidth="24px"
            xlHeight="24px"
            $fill="none"
            $stroke="currentColor"
            icon="icon-calendar-tick"
          />
          <S.Text>МоЇ бронювання</S.Text>
        </S.Link>
      </li>

      <li>
        <S.Link to="/teacher/calendar">
          <IconSvg
            xlWidth="24px"
            xlHeight="24px"
            $fill="none"
            $stroke="currentColor"
            icon="icon-calendar"
          />
          <S.Text>Календар</S.Text>
        </S.Link>
      </li>

      <li>
        <S.Link to="/teacher/feedback">
          <IconSvg
            xlWidth="24px"
            xlHeight="24px"
            $fill="none"
            $stroke="currentColor"
            icon="icon-Vector"
          />
          <S.Text>Відгуки</S.Text>
        </S.Link>
      </li>

      <li>
        <S.Link to="/teacher/tariff">
          <IconSvg
            xlWidth="24px"
            xlHeight="24px"
            $fill="none"
            $stroke="currentColor"
            icon="icon-slider-horizontal"
          />
          <S.Text>Тарифи</S.Text>
        </S.Link>
      </li>

      <li>
        <S.Btn type="button" onClick={ signout }>
          <IconSvg
            xlWidth="24px"
            xlHeight="24px"
            $fill="none"
            $stroke="currentColor"
            icon="icon-logout"
          />
          <S.Text>Вийти</S.Text>
        </S.Btn>
      </li>
    </ul>
  );
};
