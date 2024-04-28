import React from 'react'
import * as S from './CancelModal.styled';
import transformDate from '../../transformDate';

const CancelModal = ( { classData } ) => {
    const { subject,studentName, studentSurname, date, time, venue } = classData;
  return (
    <>
        <S.Title>
          Бажаєте скасувати заняття?
        </S.Title>
        <S.Description>
             {` Підтвердіть скасування вашого заняття:
              “${subject}” зі студентом ${studentName} ${studentSurname},
               запланованого на ${ transformDate( date )} о ${time} у форматі ${venue}`}
          </S.Description>
          <S.ButtonBox>
              <S.Button yesBtn={ true }>Так</S.Button>
              <S.Button>Ні</S.Button>
          </S.ButtonBox>
    </>
  )
}

export default CancelModal
