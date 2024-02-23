// Дляя використання в компоненті InputFieldPhone.jsx

import React, { useState } from 'react';
import { Item, List, PhoneCode, TextWrapp } from './PhoneSelect.styled';
import data from '../modalElements/PhoneSelectCountries.json';
import { IconSvg } from '../common/IconSvg';

export const PhoneSelect = ( {
  valueSelect,
  xlHeightList,
  mdHeightList,
  smHeightList,
  ...props
} ) => {
  const [ showSelect, setShowSelect ] = useState( false );
  const [ dataCountry, setDataCountry ] = useState( {
    flag: 'icon-flag-UA',
    code: '+380',
  } );

  const handleShowList = () => {
    setShowSelect( !showSelect );
  };

  return (
    <PhoneCode $isShow={ showSelect } onClick={ handleShowList } { ...props }>
      <TextWrapp>
        <IconSvg
          xlWidth="24px"
          xlHeight="24px"
          smWidth="20px"
          smHeight="20px"
          icon={ dataCountry.flag }
        />

        <IconSvg
          width="24px"
          height="24px"
          icon="icon-arrow-phone"
          style={ {
            transform: showSelect && 'rotate(180deg)',
            marginRight: '12px',
          } }
        />
      </TextWrapp>

      {showSelect && (
        <List { ...props }>
          {data.map( ( { code, dialCode, flag, name } ) => {
            return (
              <Item
                key={ code }
                onClick={ () => {
                  valueSelect( { code, dialCode } );
                  setDataCountry( { flag: flag, code: dialCode } );
                } }
                { ...props }
              >
                <IconSvg
                  xlWidth="24px"
                  xlHeight="24px"
                  smWidth="20px"
                  smHeight="20px"
                  icon={ flag }
                />
                <p>{dialCode}</p>
                <p>{name}</p>
              </Item>
            );
          } )}
        </List>
      )}
    </PhoneCode>
  );
};
