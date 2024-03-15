import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { Abbreviation } from '../../common/Abbreviation';
import * as S from './Dropdown.styled';
import { AvatarWrapper } from '../Header.styled';
import { Navigation } from 'components/StudentPage/Navbar/Navigation';

export const Dropdown = () => {
    const { user } = useAuth();
  
    return (
        <S.Dropdown>
        <S.PersonalData>
          <AvatarWrapper $dropdown>
            <Abbreviation $fontSize='20px' $fontWeight='500' $lineHeight='1.4' />
          </AvatarWrapper>
          <div className='meta-wrapper'>
            <p className='name'>{ user?.name }</p>
            <p className='email'>{ user?.email }</p>
          </div>
        </S.PersonalData>
        <Navigation />
      </S.Dropdown>
    );
};
