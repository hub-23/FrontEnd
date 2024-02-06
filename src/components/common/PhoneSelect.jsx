import React, { useState } from 'react';
import { Item, List, PhoneCode, TextCode, TextWrapp, Title } from './PhoneSelect.styled';
import { IconSvg } from './IconSvg';
import data from '../../assets/countries.json';

export const PhoneSelect = ( { valueSelect, xlHeightList, mdHeightList, smHeightList, ...props } ) => {
  const [ showSelect, setShowSelect ] = useState( false );

  const handleShowList = () => {
    setShowSelect( !showSelect );
  };

  const [ dataCountry, setDataCountry ] = useState( { flag: '🇺🇦', code: '+38' } );

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

        <TextCode>{dataCountry.code}</TextCode>
      </TextWrapp>

      {showSelect && (
        <List $xlHeight={ xlHeightList } $mdHeight={ mdHeightList } $smHeight={ smHeightList }>
          {data.map( ( { code, dialCode, flag, name } ) => {
            return (
              <Item
                key={ code }
                onClick={ () => {
                  valueSelect( dialCode );
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
