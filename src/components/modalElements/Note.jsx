import React from 'react';
import { IconSvg } from '../common/IconSvg';
import * as S from './Note.styled'; 

export const Note = ( { text, ...props } ) => {
    return (
        <S.WrappWarningText>
            <IconSvg
                xlWidth="24px"
                xlHeight="24px"
                icon="icon-star-marker"
                { ...props }
            />
            <S.WarningText { ...props }>{ text }</S.WarningText>
        </S.WrappWarningText>
    );
};
