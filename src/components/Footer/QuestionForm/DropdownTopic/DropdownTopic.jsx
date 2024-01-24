import React from 'react';
import * as S from './DropdownTopic.styled';


export const DropdownTopic = ( { data, handleTopicSelect, formik } ) => {
  return (
    <S.Dropdown>
      <ul>
        {data.map( ( topic ) => (
          <S.DropdownItem
            key={ topic }
            onClick={ () => handleTopicSelect( formik, topic ) }
          >
            <p>{topic}</p>
          </S.DropdownItem>
        ) )}
      </ul>
    </S.Dropdown>
  );
};
