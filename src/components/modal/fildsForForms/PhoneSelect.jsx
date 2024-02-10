import React, { useState } from 'react';
import { Item, List, PhoneCode, TextWrapp, Title } from './PhoneSelect.styled';
import data from './countries.json';
import { IconSvg } from '../../common/IconSvg';

export const PhoneSelect = ( { valueSelect, xlHeightList, mdHeightList, smHeightList, ...props } ) => {
  const [ showSelect, setShowSelect ] = useState( false );
  const [ dataCountry, setDataCountry ] = useState( { flag: '🇺🇦', code: '+380' } );

  const handleShowList = () => {
    setShowSelect( !showSelect );
  };

  return (
    <PhoneCode $isShow={ showSelect } onClick={ handleShowList } { ...props }>
      <TextWrapp>
        <Title>{dataCountry.flag}</Title>

        <IconSvg
          width="24px"
          height="24px"
          icon="icon-arrow-phone"
          style={ { transform: showSelect && 'rotate(180deg)', marginRight: '12px' } }
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
                <p>{flag}</p>
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
