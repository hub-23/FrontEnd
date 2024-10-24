import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { InputFieldPhone } from 'components/common/modalElements/InputFieldPhone';
import { Note } from 'components/common/modalElements/Note';
import * as S from './ContactInfo.styled';
import { deepAccent, white } from 'utils/variables.styled';

export const ContactInfo = ( { error, isDataUser, valueInput, getPhone } ) => {
  const { user } = useAuth();

  const handleGetPhone = values => {
    getPhone( values.value );
  }; // значення з InputFieldPhone

  return (
    <S.Wrapp>
      <div>
        <S.Email color={ white }>{user?.email ?? user.name}</S.Email>

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

      <InputFieldPhone
        name="phone"
        valueInput={ valueInput }
        submitPhone={ handleGetPhone }
        $isDataUser={ isDataUser }
        $error={ error }
        // ----------- use for PhoneSelect
        $xlPositionTopList="18px"
        $smPositionTopList="11px"
        $xlPositionLeftList="32px"
        $xlHeightList="270px"
        $smHeightList="290px"
        $xlGapList="12px"
        $xlFontSizeList="16px"
        customIcon="icon-phone"
        $stroke="none"
      />
      <InputFieldPhone
        name="phone"
        valueInput={ valueInput }
        submitPhone={ handleGetPhone }
        $isDataUser={ isDataUser }
        $error={ error }
        // ----------- use for PhoneSelect
        $xlPositionTopList="18px"
        $smPositionTopList="11px"
        $xlPositionLeftList="32px"
        $xlHeightList="270px"
        $smHeightList="290px"
        $xlGapList="12px"
        $xlFontSizeList="16px"
        customIcon="icon-viber"
        $stroke="none"
      />
      <InputFieldPhone
        name="phone"
        valueInput={ valueInput }
        submitPhone={ handleGetPhone }
        $isDataUser={ isDataUser }
        $error={ error }
        // ----------- use for PhoneSelect
        $xlPositionTopList="18px"
        $smPositionTopList="11px"
        $xlPositionLeftList="32px"
        $xlHeightList="270px"
        $smHeightList="290px"
        $xlGapList="12px"
        $xlFontSizeList="16px"
        customIcon="icon-telegram"
        $stroke="none"
      />
    </S.Wrapp>
  );
};
