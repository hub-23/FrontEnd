import React, { useState } from 'react';
import { IconSvg } from '../../../common/IconSvg';
import * as S from './DropdownTopic.styled';
import { Input } from '../QuestionForm.styled';


export const DropdownTopic = ( { data, valueSelect, error } ) => {
  const [ notificationTopic, setNotificationTopic ] = useState( '' );
  const [ isDropdownShown, setIsDropdownShown ] = useState( false );
  return (
    <div>
      <S.InputWrapper>
        <Input
          type="text"
          name="topic"
          placeholder='Тема повідомлення'
          value={ notificationTopic }
          $error={ error }
        />
        <S.DropdownBtn
          type='button'
          aria-label='dropdown-menu'
          onClick={ () => setIsDropdownShown( !isDropdownShown ) }
          $rotate={ isDropdownShown }
        >
          <IconSvg
            xlWidth='11px'
            xlHeight='6px'
            icon='icon-arrow-down'
          />
        </S.DropdownBtn>
      </S.InputWrapper>
      {isDropdownShown && (
        <S.Dropdown>
          <ul>
            {data.map( ( topic ) => (
              <S.DropdownItem
                key={ topic }
                onClick={ () => {
                  valueSelect( topic );
                  setNotificationTopic( topic );
                } }
              >
                <p>{topic}</p>
              </S.DropdownItem>
            ) )}
          </ul>
        </S.Dropdown>
      )}
    </div>
  );
};
