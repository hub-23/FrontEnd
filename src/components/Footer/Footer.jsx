import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Footer.styled';
import { IconSvg } from '../common/IconSvg';
import { Modal } from '../modal/Modal';
import { QuestionForm } from './QuestionForm/QuestionForm';


export const Footer = () => {
  const [ isModalOpen, setIsModalOpen ] = useState( false );

  const toggleModal = ( e ) => {
    setIsModalOpen( !isModalOpen );
    document.body.style.overflow = 'visible';
  };

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
                <IconSvg
                  xlWidth='24px'
                  xlHeight='24px'
                  icon='icon-clock'
                />
                <S.Schedule>Пн-Нд // 9:00 - 20:00</S.Schedule>
              </S.ContactsItem>
              <S.Email href="mailto:hub23project@gmail.com">
                <IconSvg
                  xlWidth='24px'
                  xlHeight='24px'
                  icon='icon-envelope'
                />
                hub23project@gmail.com
              </S.Email>
            </S.ContactsWrapper>

            <S.Header>Слідкуй за нами</S.Header>
            <S.SocList>
              <li>
                <IconSvg
                  xlWidth='24px'
                  xlHeight='24px'
                  icon='icon-youtube'
                  style={ { width: '24px', height: '24px' } }
                />
              </li>
              <li>
                <IconSvg
                  xlWidth='24px'
                  xlHeight='24px'
                  icon='icon-facebook'
                />
              </li>
            </S.SocList>
          </div>

          <S.FormBtnWrapper>
            <S.Header>Залишились питання?</S.Header>
            <S.FormBtn
              type='button'
              onClick={ () => setIsModalOpen( !isModalOpen ) }
            >
              Заповнити форму
            </S.FormBtn>
          </S.FormBtnWrapper>
        </S.ContentOrganizer>
        { isModalOpen && (
          <Modal onActiveModal={ toggleModal }>
            <QuestionForm onActiveModal={ toggleModal } />
          </Modal>
        )}

        <S.TermsRightsWrapper>
          <div>
            <S.Terms href="" $first>Політика конфіденційності</S.Terms>
            <svg width="1" height="20">
              <line x1="1" y1="0" x2="1" y2="20" stroke="#fff" strokeWidth="1" />
            </svg>
            <S.Terms href="">Умови використання</S.Terms>
          </div>
          <S.Rights>Усі права захищені 2023</S.Rights>
        </S.TermsRightsWrapper>
      </S.FooterContainer>
    </S.FooterSection>
  );
};
