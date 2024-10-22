import React from 'react';
import { Input } from '../../../common/modalElements/Input';
import * as S from './Adress.styled';

export const Adress = ( {
  country,
  city,
  street,
  errCountry,
  errCity,
  errStreet,
} ) => {

  return (
    <S.Container>
      <Input
        type="text"
        name="country"
        errCountry={ errCountry }
        value={ country }
        component="teacher"
      />
      <Input
        type="text"
        name="city"
        errCity={ errCity }
        value={ city }
        component="teacher"
      />
      <Input
        type="text"
        name="street"
        errStreet={ errStreet }
        value={ street }
        component="teacher"
      />
      <Input
        type="text"
        name="time_zone"
        // errAdress={ errAdress }
        value={ street }
        component="teacher"
      />
    </S.Container>
  );
};
