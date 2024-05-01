import React from 'react'
import * as S from './DefaultModal.styled'
import { BtnClose } from 'components/common/BtnClose'
import { IconSvg } from 'components/common/IconSvg'

const DefaultModal = ( { toggleModal,  children } ) => {
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
      { children }
    </S.ModalWindow>
  )
}

export default DefaultModal
