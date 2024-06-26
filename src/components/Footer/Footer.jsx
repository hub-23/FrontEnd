import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Footer.styled';
import { IconSvg } from '../common/IconSvg';
import { Modal } from '../common/modalElements/Modal';
import { QuestionForm } from './modals/QuestionForm/QuestionForm';
import { Notification } from '../common/modalElements/Notification';

export const Footer = () => {
  const [ isFormOpen, setIsFormOpen ] = useState( false );
  const [ isNotificationShown, setIsNotificationShown ] = useState( false );
  const success = true;
  // const success = false; // залежно від status code з бекенду

  return (
    <S.FooterSection>
      <S.FooterContainer>
        <S.ContentOrganizer>
          <Link to="/">
            <S.Logo />
          </Link>

          <S.NavWrapper>
            <S.Header>Інформація</S.Header>
            <ul>
              <S.NavItem>
                <S.NavLink to="/teacher">Викладачі</S.NavLink>
              </S.NavItem>
              <S.NavItem>
                <S.NavLink to="/about">Про нас</S.NavLink>
              </S.NavItem>
              <S.NavItem>
                <S.NavLink to="/feedback">Відгуки</S.NavLink>
              </S.NavItem>
            </ul>
          </S.NavWrapper>

          <S.ContactsWrapper>
            <S.Header>Контакти</S.Header>
            <S.ContactsItem>
              <IconSvg xlWidth="24px" xlHeight="24px" icon="icon-clock" />
              <S.Schedule>Пн-Нд // 9:00 - 20:00</S.Schedule>
            </S.ContactsItem>
            <S.Email href="mailto:hub23project@gmail.com">
              <IconSvg xlWidth="24px" xlHeight="24px" icon="icon-envelope" />
              hub23project@gmail.com
            </S.Email>
          </S.ContactsWrapper>

          <S.SocListWrapper>
            <S.Header>Слідкуй за нами</S.Header>
            <S.SocList>
              <li>
                <S.SocLink
                  href="https://www.youtube.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Відеохостинг YouTube"
                >
                  <IconSvg xlWidth="24px" xlHeight="24px" icon="icon-youtube" />
                </S.SocLink>
              </li>
              <li>
                <S.SocLink
                  href="https://www.facebook.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Соціальна мережа Facebook"
                >
                  <IconSvg
                    xlWidth="24px"
                    xlHeight="24px"
                    icon="icon-facebook"
                  />
                </S.SocLink>
              </li>
            </S.SocList>
          </S.SocListWrapper>

          <S.FormBtnWrapper>
            <S.Header>Залишились питання?</S.Header>
            <S.FormBtn type="button" onClick={ () => setIsFormOpen( true ) }>
              Заповнити форму
            </S.FormBtn>
            {isFormOpen && (
              <Modal onActiveModal={ () => setIsFormOpen( false ) }>
                <QuestionForm
                  onFormClose={ () => setIsFormOpen( false ) }
                  onNotificationShow={ () => setIsNotificationShown( true ) }
                />
              </Modal>
            )}
            {isNotificationShown && (
              <Modal onActiveModal={ () => setIsNotificationShown( false ) }>
                <Notification
                  onNotificationClose={ () => setIsNotificationShown( false ) }
                  success={ success }
                  title={
                    success ? 'Форму успішно надіслано' : 'Сталась помилка'
                  }
                  description={
                    success // eslint-disable-next-line max-len
                      ? 'Ваше повідомлення буде опрацьовано протягом 72 годин та надано фідбек за телефоном або на пошту'
                      : 'Щось пішло не так, тому спробуйте ще раз або виконайте цю дію пізніше'
                  }
                />
              </Modal>
            )}
          </S.FormBtnWrapper>
        </S.ContentOrganizer>

        <S.TermsRightsWrapper>
          <div>
            <S.Terms href="" $first>
              Політика конфіденційності
            </S.Terms>
            <svg width="1" height="20">
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="20"
                stroke="#fff"
                strokeWidth="1"
              />
            </svg>
            <S.Terms href="">Умови використання</S.Terms>
          </div>
          <S.Rights>Усі права захищені 2024</S.Rights>
        </S.TermsRightsWrapper>
      </S.FooterContainer>
    </S.FooterSection>
  );
};
