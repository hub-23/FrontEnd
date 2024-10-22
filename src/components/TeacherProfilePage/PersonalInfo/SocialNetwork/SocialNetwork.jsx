import React from 'react';
import { Input } from 'components/common/modalElements/Input';
import { Wrapp } from '../ContactInfo/ContactInfo.styled';

export const SocialNetwork = ( { instagram, facebook } ) => {

  return (
    <Wrapp>
      <Input
        type="text"
        name="instagram"
        placeholder={ instagram }
        component="teacher"
        customIcon="icon-instagram"
      />
      <Input
        type="text"
        name="facebook"
        facebook={ facebook }
        component="teacher"
        customIcon="icon-facebook"
      />
    </Wrapp>
  );
};
