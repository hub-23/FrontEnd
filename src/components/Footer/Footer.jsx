import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Footer.styled';
import { IconSvg } from '../common/IconSvg';


export const Footer = () => {
  return (
    <S.FooterSection>
      <S.FooterContainer>
        <S.ContentOrganizer>
          <Link to='/'>
            <S.Logo />
          </Link>
          <S.NavWrapper>
            <S.Header>Інформація</S.Header>
            <ul>
              <S.NavItem><S.NavLink to='/teacher'>Викладачі</S.NavLink></S.NavItem>
              <S.NavItem><S.NavLink to='/about'>Про нас</S.NavLink></S.NavItem>
              <S.NavItem><S.NavLink to='/feedback'>Відгуки</S.NavLink></S.NavItem>
            </ul>
          </S.NavWrapper>
          <div>
            <S.ContactsWrapper>
              <S.Header>Контакти</S.Header>
              <S.ContactsItem>
                <IconSvg xlWidth='24px' xlHeight='24px' icon='icon-clock' />
                <S.Contacts>Пн-Нд // 9:00 - 20:00</S.Contacts>
              </S.ContactsItem>
              <S.ContactsItem>
                <IconSvg xlWidth='24px' xlHeight='24px' icon='icon-envelope' />
                <S.Email href="mailto:hub23project@gmail.com">hub23project@gmail.com</S.Email>
              </S.ContactsItem>
            </S.ContactsWrapper>

            <S.Header>Слідкуй за нами</S.Header>
            <S.SocList>
              <li><IconSvg xlWidth='24px' xlHeight='24px' icon='icon-youtube' /></li>
              <li><IconSvg xlWidth='24px' xlHeight='24px' icon='icon-facebook' /></li>
            </S.SocList>
          </div>

          <div>
            <S.Header>Залишились питання?</S.Header>
            <S.FormBtn>Заповнити форму</S.FormBtn>
          </div>
        </S.ContentOrganizer>
        <S.TermsRightsWrapper>
          <div>
            <S.Terms href="">Політика конфіденційності</S.Terms>
            <span>|</span>
            <S.Terms href="">Умови використання</S.Terms>
          </div>
          <S.Rights>Усі права захищені 2023</S.Rights>
        </S.TermsRightsWrapper>
      </S.FooterContainer>
    </S.FooterSection>
  );
};
