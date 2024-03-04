import React from 'react';
import { useAuth } from 'hooks/useAuth';
import * as S from './Dropdown.styled';
import { AvatarWrapper } from '../Header.styled';

export const Dropdown = () => {
    const { user } = useAuth();

    const abbreviation = user?.username
    ? user?.username
      .split( ' ' )
      .map( ( word ) => word[ 0 ].toUpperCase() )
      .join( '' )
    : '';

    return (
        <S.Dropdown>
        <S.PersonalData>
          <AvatarWrapper $dropdown><p>{ abbreviation }</p></AvatarWrapper>
          <div className='meta-wrapper'>
            <p className='name'>{ user?.username }</p>
            <p className='email'>{ user?.email }</p>
          </div>
        </S.PersonalData>
      </S.Dropdown>
    );
};
