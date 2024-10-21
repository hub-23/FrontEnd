import React from 'react';
import { Note } from 'components/common/modalElements/Note';
import * as S from '../ContactInfo/ContactInfo.styled';
import { deepAccent, white } from 'utils/variables.styled';
import { Input } from 'components/common/modalElements/Input';

export const ChangePassword = ( {
  errNewPassword,
  errRepeatNewPassword,
  values,
} ) => {
  const { newPassword, repeatNewPassword } = values;

  return (
    <S.Wrapp>
      <div>
        <S.Email color={ white }>********</S.Email>

        <div style={ { position: 'relative' } }>
          <Note
            text="Вносити зміни в це поле не можна"
            $fill={ deepAccent }
            $xlBottom="-26px"
            $smBottom="-26px"
            $xlLeft="12px"
            $mdLeft="0"
            $xlFontSize="14px"
            $smFontSize="12px"
            $xlLineHeight="15.82"
            $smLineHeight="16.8"
            $mdWidth="16px"
            $mdHeight="16px"
          />
        </div>
      </div>
      <div style={ { position: 'relative' } }>
        <Input
          name="newPassword"
          placeholder="Новий пароль"
          type="password"
          isStar={ true }
          btnEye
          $error={ errNewPassword }
          $bottom={
            newPassword && newPassword.startsWith( 'Пароль має' ) && '-40px'
          }
          value={ newPassword }
          component="student"
        />
        <div style={ { position: 'relative' } }>
          <Note
            text="Більше 8 символів, велика літера, цифри і спеціальний знак"
            $fill={ deepAccent }
            $xlBottom="-26px"
            $smBottom="-26px"
            $xlLeft="12px"
            $mdLeft="0"
            $xlFontSize="14px"
            $smFontSize="12px"
            $xlLineHeight="15.82"
            $smLineHeight="16.8"
            $mdWidth="16px"
            $mdHeight="16px"
            $error={ errNewPassword }
          />
        </div>
      </div>
      <div style={ { position: 'relative' } }>
        <Input
          placeholder="Повторити пароль"
          name="repeatNewPassword"
          type="password"
          isStar={ true }
          btnEye
          $error={ errRepeatNewPassword }
          $bottom={
            repeatNewPassword
            && repeatNewPassword.startsWith( 'Пароль має' )
            && '-40px'
          }
          value={ repeatNewPassword }
          component="student"
        />
      </div>
    </S.Wrapp>
  );
};
