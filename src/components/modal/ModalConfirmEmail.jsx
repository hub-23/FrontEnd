import React from 'react';
import { BtnClose } from '../common/BtnClose';
import { IconSvg } from '../common/IconSvg';
import {
  Article,
  BtnLogin,
  Modal,
  RegisterText,
  TextDescr,
  Title,
  WrappRegister,
} from './ModalConfirmEmail.styled';

export const ModalConfirmEmail = ( { onActiveModal } ) => {
  return (
    <Modal>
      <BtnClose
        xlRight="30px"
        xlTop="30px"
        mdRight="15px"
        mdTop="15px"
        smRight="10px"
        smTop="10px"
        // click={ () => setShowModalConfirmEmail( ( prev ) => !prev ) }
        click={ onActiveModal }
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

      <Article>
        <IconSvg xlWidth="64px" xlHeight="64px" smWidth="40px" smHeight="40px" icon="icon-mail" />
        <Title>Підтвердіть ваш E-mail</Title>
        <TextDescr>
          {`Будь ласка, перевірте вашу електронну пошту і активуйте ваш кабінет. Якщо ви не отримали
                    лист у папці `}
          <span>Вхідні</span>
          {', перевірте папку '}
          <span>Спам</span>
        </TextDescr>

        <WrappRegister>
          <RegisterText>Не отримали лист?</RegisterText>
          <BtnLogin type="button" onClick={ () => console.log( 'Надіслати лист повторно' ) }>
                        Надіслати лист повторно
          </BtnLogin>
        </WrappRegister>
      </Article>
    </Modal>
  );
};
