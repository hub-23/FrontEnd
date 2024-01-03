import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Footer.styled';
import logo from '../../assets/home/logo.svg';
// import sprite from '../../assets/sprite.svg';
import { IconSvg } from '../common/IconSvg';

export const Footer = () => {
  return (
    <S.FooterSection>
      <S.FooterContainer>
        <S.ContentOrganizer>
          <Link to='/'>
            <img src={ logo } alt='HUB23'/>
          </Link>
          <div>
            <S.Header>Інформація</S.Header>
            <Link to='/teacher'>Викладачі</Link>
            <Link to='/about'>Про нас</Link>
            <Link to='/feedback'>Відгуки</Link>
          </div>
          <div>
            <S.Header>Контакти</S.Header>
            <S.ContactsWrapper>
              <IconSvg xlWidth='24px' xlHeight='24px' icon='icon-clock' />
              <S.Contacts>Пн-Нд // 9:00 - 20:00</S.Contacts>
            </S.ContactsWrapper>
            <S.ContactsWrapper>
              <IconSvg xlWidth='24px' xlHeight='24px' icon='icon-envelope' />
              <S.Contacts>hub23project@gmail.com</S.Contacts>
            </S.ContactsWrapper>
            <S.Header>Слідкуй за нами</S.Header>
            <div>
              <IconSvg xlWidth='24px' xlHeight='24px' icon='icon-youtube' />
              <IconSvg xlWidth='24px' xlHeight='24px' icon='icon-facebook' />
            </div>
          </div>
          <div>
            <S.Header>Залишились питання?</S.Header>
            <button>Заповнити форму</button>
          </div>
        </S.ContentOrganizer>
        <div>
          <div>
            <S.Terms href="">Політика конфіденційності</S.Terms>
            <span>|</span>
            <S.Terms href="">Умови використання</S.Terms>
          </div>
          <S.Rights>Усі права захищені 2023</S.Rights>
        </div>
      </S.FooterContainer>
    </S.FooterSection>
  );
};
