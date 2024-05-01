import React, { useState } from 'react'
import * as S from './DefaultModal.styled'
import { BtnClose } from 'components/common/BtnClose'
import { IconSvg } from 'components/common/IconSvg'
import transformDate from '../../transformDate';
import  ErrorMsg from '../ErrorMsg/ErrorMsg';

const DefaultModal = ( { toggleModal, classData } ) => {
  const [ error, setError ] = useState( false );
    const { subject, studentName, studentSurname, date, time, venue } = classData;

  const cancelLesson = () => {
console.log( 'lesson cancel' )
setError( true )
  }
  
  return (
      <S.ModalWindow>
         <BtnClose
        xlRight="48px"
        xlTop="48px"
        mdRight="15px"
        mdTop="15px"
        smRight="10px"
        smTop="10px"
        click={ toggleModal }
      >
        <IconSvg
          xlWidth="60px"
          xlHeight="60px"
          mdWidth="36px"
          mdHeight="36px"
          smWidth="24px"
          smHeight="24px"
          icon="icon-close"
        />
      </BtnClose>
      <>
        {!error ? <>
          <S.Title>
            Бажаєте скасувати заняття?
          </S.Title>
          <S.Description>
               {` Підтвердіть скасування вашого заняття:
                “${subject}” зі студентом ${studentName} ${studentSurname},
                 запланованого на ${ transformDate( date )} о ${time} у форматі ${venue}`}
            </S.Description>
            <S.ButtonBox>
              <S.VarButton type='button' variant='blue' yesBtn={ true }
                onActiveModal={ cancelLesson }>
                 Так
              </S.VarButton>
              <S.VarButton type='button' variant='blueGradientedBorder'
                onClick={ toggleModal }>
                  Ні
                </S.VarButton>
            </S.ButtonBox>
        </>
          : <ErrorMsg/>
        }
    </>
    </S.ModalWindow>
  )
}

export default DefaultModal
