import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import * as S from './Abbreviation.styled';

export const Abbreviation = ( { ...props } ) => { 
    const { user } = useAuth();

    const abbreviation = user?.username
        ? user.username
          .split( ' ' )
          .map( ( word ) => word[ 0 ].toUpperCase() )
          .join( '' )
        : '';
    
    return (
        <S.Abbreviation { ...props }>{ abbreviation }</S.Abbreviation>
    );
};
