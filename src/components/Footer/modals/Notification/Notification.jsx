import React from 'react';
import { BtnClose } from '../../../modalElements/BtnClose';
import { IconSvg } from '../../../common/IconSvg';
import { accent } from '../../../../utils/variables.styled';
import * as S from './Notification.styled';

export const Notification = ( { onNotificationClose, success } ) => {

  return (
    <S.NotificationWrapper>
      <BtnClose onActiveModal={ onNotificationClose }/>
      <S.IconWrapper $success={ success } >
        { success
        ? <IconSvg
          xlWidth="28px"
          xlHeight="19px"
          mdWidth="25px"
          mdHeight="17px"
          smWidth="25px"
          smHeight="17px"
          icon='icon-image-true'
        />
        : <IconSvg
          xlWidth="80px"
          xlHeight="80px"
          mdWidth="72px"
          mdHeight="72px"
          smWidth="72px"
          smHeight="72px"
          icon='icon-close-cross'
          stroke={ accent }
        />
        }
      </S.IconWrapper>
      <S.KeyMessage>{ success ? 'Форму успішно надіслано' : 'Сталась помилка' }</S.KeyMessage>
      <S.Details>
        { success
          ? 'Ваше повідомлення буде опрацьовано протягом 72 годин та надано фідбек за телефоном або на пошту'
          : 'Щось пішло не так, тому спробуйте ще раз або виконайте цю дію пізніше'
        }
      </S.Details>
      <S.LinkBtn
        variant='blue'
        onActiveModal={ onNotificationClose }
      >
        На головну сторінку
      </S.LinkBtn>
    </S.NotificationWrapper>
  );
};
