import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { Abbreviation } from '../../common/Abbreviation';
import * as S from './Dropdown.styled';
import { AvatarWrapper } from '../Header.styled';

export const Dropdown = () => {
    const { user } = useAuth();

    return (
        <S.Dropdown>
        <S.PersonalData>
          <AvatarWrapper $dropdown>
            <Abbreviation $fontSize='20px' />
          </AvatarWrapper>
          <div className='meta-wrapper'>
            <p className='name'>{ user?.username }</p>
            <p className='email'>{ user?.email }</p>
          </div>
        </S.PersonalData>
      </S.Dropdown>
    );
};
