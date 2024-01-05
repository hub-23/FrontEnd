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
import { useHubContext } from '../../redux/Context';

export const ModalConfirmEmail = ( { onActiveModal } ) => {
  const { setShowModalThanksForJoining } = useHubContext();

  return (
    <Modal>
      <BtnClose
        xlRight="30px"
        xlTop="30px"
        mdRight="15px"
        mdTop="15px"
        smRight="10px"
        smTop="10px"
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
      <button
        style={ { position: 'absolute', left: '20px', top: '20px' } }
        type="button"
        onClick={ () => {
          onActiveModal();
          setShowModalThanksForJoining( ( prev ) => !prev );
        } }
      >
                Show ModalThanksForJoining
      </button>

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
