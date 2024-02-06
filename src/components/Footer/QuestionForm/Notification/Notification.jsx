import React from 'react';
import * as S from './Notification.styled';

export const Notification = ( { onActiveModal } ) => {
  console.log( 'ppp' );
  return (
    <S.NotificationWrapper>
      <p>Форму успішно надіслано</p>
      <p>Ваше повідомлення буде оброблено протягом 72 годин та надано фідбек за телефоном або на пошту</p>
    </S.NotificationWrapper>
  );
};
