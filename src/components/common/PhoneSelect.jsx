import React, { useState } from 'react';
import { Item, List, PhoneCode, TextCode, TextWrapp, Title } from './PhoneSelect.styled';
import { IconSvg } from './IconSvg';

export const PhoneSelect = ( { valueSelect, data, widthList, heightList } ) => {
  const [ showSelect, setShowSelect ] = useState( false );

  const handleShowList = () => {
    setShowSelect( !showSelect );
  };

  const [ dataCountry, setDataCountry ] = useState( { flag: '🇺🇦', code: '+380' } );

  return (
    <PhoneCode onClick={ handleShowList }>
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
        <List $widthList={ widthList } $height={ heightList }>
          {data.map( ( { code, dialCode, flag, name } ) => {
            return (
              <Item
                key={ code }
                onClick={ () => {
                  valueSelect( dialCode );
                  setDataCountry( { flag: flag, code: dialCode } );
                } }
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
