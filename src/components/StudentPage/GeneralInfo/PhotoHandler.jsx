import React from 'react';
import * as S from './PhotoHandler.styled';
import { BtnClose } from '../../modalElements/BtnClose';

export const PhotoHandler = ( { onPhotoHandlerClose } ) => {
    return (
        <S.Container>
            <BtnClose
                onActiveModal={ onPhotoHandlerClose }
            />
        </S.Container>
    );
};
