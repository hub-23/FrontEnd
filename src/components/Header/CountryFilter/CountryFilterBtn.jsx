import React, { useState, useRef, useEffect } from 'react';
import _ from 'lodash';
import { IconSvg } from '../../common/IconSvg';
import * as S from './CountryFilter.styled';
import { Modal } from '../../modal/Modal';
import { CountrySelect } from './CountrySelect';
import { useHubContext } from '../../../redux/Context';


export const CountryFilterBtn = ( { onCountryOverflow } ) => {
  const [ isModalOpen, setIsModalOpen ] = useState( false );
  const { selectedCountry } = useHubContext();
  const ref = useRef();

  const toggleModal = ( e ) => {
    setIsModalOpen( !isModalOpen );
    document.body.style.overflow = 'visible';
  };

  useEffect( () => {
    localStorage.setItem( 'selectedCountry', selectedCountry );

    const checkOverflow = () => {
      const countryName = ref.current;

      if ( countryName && onCountryOverflow ) {
        if ( countryName.scrollWidth < 74 ) {
          onCountryOverflow( 0 );
        } else if ( countryName.scrollWidth > 74 && countryName.scrollWidth <= 175 ) {
          const overflowSize = countryName.scrollWidth - 74;
          onCountryOverflow( overflowSize );
        } else if ( countryName.scrollWidth > 175 ) {
          onCountryOverflow( 101 );
        }
      }
    };
    setTimeout( checkOverflow, 0 );

    const handleResize = () => checkOverflow();
    window.addEventListener( 'resize', _.debounce( handleResize, 1000 ) );

    return () => {
      window.removeEventListener( 'resize', handleResize );
    };
  }, [ selectedCountry, onCountryOverflow ] );

  return (
    <>
      <S.CountryFilterWrapper>
        <p ref={ ref }>{selectedCountry}</p>
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
