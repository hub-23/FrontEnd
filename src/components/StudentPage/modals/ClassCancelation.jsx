import React from 'react';
import { BtnClose } from '../../common/modalElements/BtnClose';
import * as S from './ClassCancelation.styled';


export const ClassCancelation = ( { onActiveModal, onNotificationShow } ) => {
    const handleClassCancel = () => {
        // dispatch
        onActiveModal();
        onNotificationShow( true );
    };

    return (
        <S.Container>
            <BtnClose onActiveModal={ onActiveModal } $xlTop='48px' $xlRight='48px' />
            <S.Title>Бажаєте скасувати заняття?</S.Title>
            <S.Text>
                Підтвердіть скасування вашого заняття
                з німецької мови 27.11.23 о 9:00
                в онлайні з Олександром Олешком
            </S.Text>
            <S.BtnsWrapper>
                <S.Btn
                    variant="blue"
                    onClick={ handleClassCancel }
                >
                    Так
                </S.Btn>
                <S.Btn
                    variant="blueGradientedBorder"
                    onClick={ onActiveModal }
                >
                    Ні
                </S.Btn>
            </S.BtnsWrapper>
        </S.Container>
    );
};
