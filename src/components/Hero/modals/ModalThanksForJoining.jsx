import React from 'react';
import logo from '../../../assets/home/logo.svg';

import { Article, BtnText, LogoImg, Modal, Text, TextDescr, Title } from './ModalThanksForJoining.staled';
import { BtnRegistration } from './BtnRegistration';
import { bgColorGradientBtn, white } from '../../../utils/variables.styled';

export const ModalThanksForJoining = ( { onActiveModal } ) => {
  return (
    <Modal>
      <Article>
        <LogoImg src={ logo } alt="HUB23" />
        <Title>Дякуємо, що доєдналися</Title>
        <TextDescr>Щоб продовжити реєстрацію, підтвердіть свою електронну пошту</TextDescr>

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
          <BtnText>Підтвердити E-mail</BtnText>
        </BtnRegistration>

        <Text>
                    Зверніть увагу, що посилання буде активне 24 години. Якщо ви не реєструвались на Hub23,
                    будь ласка, ігноруйте цей лист
        </Text>
      </Article>
    </Modal>
  );
};
