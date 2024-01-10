import React, { useState } from 'react';
import { IconSvg } from '../../common/IconSvg';
import * as S from './CountryFilter.styled';
import { Modal } from '../../modal/Modal';
import { CountrySelect } from './CountrySelect';


export const CountryFilterBtn = () => {
  const selectedCountry = 'Україна';
  const [ isModalOpen, setIsModalOpen ] = useState( false );

  const toggleModal = ( e ) => {
    setIsModalOpen( !isModalOpen );
    document.body.style.overflow = 'visible';
  };

  return (
    <>
      <S.CountryFilterWrapper>
        <p>{selectedCountry}</p>
        <S.CountryFilterBtn
          type='button'
          aria-label='dropdown-menu'
          onClick={ () => setIsModalOpen( !isModalOpen ) }
          $rotate={ isModalOpen }
        >
          <IconSvg
            xlWidth='11px'
            xlHeight='7px'
            icon='icon-arrow-down'
          />
        </S.CountryFilterBtn>
      </S.CountryFilterWrapper>
      { isModalOpen && (
        <Modal onActiveModal={ toggleModal }>
          <CountrySelect onActiveModal={ toggleModal } />
        </Modal>
      )}
    </>
  );
};
