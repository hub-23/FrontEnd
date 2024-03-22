import React from 'react';
import { BtnClose } from '../../common/modalElements/BtnClose';
import * as S from './ClassCancelation.styled';


export const ClassCancelation = ( { onActiveModal, onNotificationShow, onCancelBanNotifShown } ) => {

    const handleClassCancel = () => {
        const scheduledClassTime = new Date( 2024, 2, 21, 9, 50, 0, 0 ); // from backend
        // year, month (0 - Jan), day, hours, minutes, seconds, milliseconds
        const now = new Date();

        if( scheduledClassTime.getTime() > now.getTime() ) {
            const diffInMs = scheduledClassTime.getTime() - now.getTime();
            const threeHoursInMs = 1000 * 60 * 60 * 3; // 10800000

            if( diffInMs <= threeHoursInMs ) { // не можна скасувати
                onCancelBanNotifShown();
            } else {
                // dispatch
            }
        }
        onNotificationShow();  
        onActiveModal();   
    };


    return (
        <S.Container>
            <BtnClose onActiveModal={ onActiveModal } $xlTop='48px' $xlRight='48px' />
            <S.Title>Бажаєте скасувати заняття?</S.Title>
            <S.Text>
                Підтвердіть скасування вашого заняття
                <br />
                &quot;німецька мова&quot; з викладачем Олександр Олешко,
                запланованого на 27.11.23 о 9:00
                <br />
                у форматі онлайн / за адресою: &quot;...&quot;
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
