import React from 'react';
import logo from '../../../assets/home/logo.svg';

import * as S from './ModalThanksForJoining.staled';
import { BtnRegistration } from '../../HomePage/Hero/modals/BtnRegistration';
import { bgColorGradientBtn, white } from '../../../utils/variables.styled';

export const ModalThanksForJoining = ( { onActiveModal } ) => {
  return (
    <S.Modal>
      <S.Article>
        <S.LogoImg src={ logo } alt="HUB23" />
        <S.Title>Дякуємо, що доєдналися</S.Title>
        <S.TextDescr>
          Щоб продовжити реєстрацію, підтвердіть свою електронну пошту
        </S.TextDescr>

        <BtnRegistration
          xlMarginBottom="30px"
          mdMarginBottom="40px"
          smMarginBottom="30px"
          color={ white }
          xlHeight="60px"
          smHeight="45px"
          bgColorGradient={ bgColorGradientBtn }
          onRegister={ () => {
            onActiveModal();
            console.log( 'Підтвердити E-mail' );
          } }
        >
          <S.BtnText>Підтвердити E-mail</S.BtnText>
        </BtnRegistration>

        <S.Text>
          Зверніть увагу, що посилання буде активне 24 години. Якщо ви не
          реєструвались на Hub23, будь ласка, ігноруйте цей лист
        </S.Text>
      </S.Article>
    </S.Modal>
  );
};
