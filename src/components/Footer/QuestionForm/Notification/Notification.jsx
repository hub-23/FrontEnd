import React from 'react';
import { BtnClose } from '../BtnClose/BtnClose';
import { IconSvg } from '../../../common/IconSvg';
import * as S from './Notification.styled';

export const Notification = ( { onActiveModal } ) => {
  return (
    <S.NotificationWrapper>
      <BtnClose onActiveModal={ onActiveModal }/>
      <S.IconWrapper>
        <IconSvg
          xlWidth="28px"
          xlHeight="19px"
          //   mdWidth="36px"
          //   mdHeight="36px"
          //   smWidth="24px"
          //   smHeight="24px"
          icon="icon-image-true"
        />
      </S.IconWrapper>
      <p>Форму успішно надіслано</p>
      <p>Ваше повідомлення буде оброблено протягом 72 годин та надано фідбек за телефоном або на пошту</p>
    </S.NotificationWrapper>
  );
};
