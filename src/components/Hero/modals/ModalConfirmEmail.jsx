import React from 'react';

import { useHubContext } from '../../../redux/Context';
import { BtnClose } from '../../common/BtnClose';
import { IconSvg } from '../../common/IconSvg';
import * as S from './ModalConfirmEmail.styled';

export const ModalConfirmEmail = ( { onActiveModal } ) => {
  const { setShowModalThanksForJoining } = useHubContext();

  return (
    <S.Modal>
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
                Show ModalThanksForJoining (temp)
      </button>

      <S.Article>
        <IconSvg xlWidth="64px" xlHeight="64px" smWidth="40px" smHeight="40px" icon="icon-mail" />
        <S.Title>Підтвердіть ваш E-mail</S.Title>
        <S.TextDescr>
          {`Будь ласка, перевірте вашу електронну пошту і активуйте ваш кабінет. Якщо ви не отримали
                    лист у папці `}
          <span>Вхідні</span>
          {', перевірте папку '}
          <span>Спам</span>
        </S.TextDescr>

        <S.WrappRegister>
          <S.RegisterText>Не отримали лист?</S.RegisterText>
          <S.BtnLogin type="button" onClick={ () => console.log( 'Надіслати лист повторно' ) }>
                        Надіслати лист повторно
          </S.BtnLogin>
        </S.WrappRegister>
      </S.Article>
    </S.Modal>
  );
};
