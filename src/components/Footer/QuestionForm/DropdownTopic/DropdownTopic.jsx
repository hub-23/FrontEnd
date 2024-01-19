import React, { useState } from 'react';
import { IconSvg } from '../../../common/IconSvg';
import * as S from './DropdownTopic.styled';
import { Input } from '../QuestionForm.styled';


export const DropdownTopic = () => {
  const notificationTopics = [
    'Технічна підтримка', 'Співпраця і пропозиції', 'Реклама', 'Проблема з оплатою', 'Інше',
  ];

  const [ isDropdownShown, setIsDropdownShown ] = useState( false );
  return (
    <div>
      <S.InputWrapper>
        <Input
          type="text"
          placeholder='Тема повідомлення'
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
            {notificationTopics.map( ( topic ) => (
              <S.DropdownItem key={ topic }>
                <p>{topic}</p>
              </S.DropdownItem>
            ) )}
          </ul>
        </S.Dropdown>
      )}
    </div>
  );
};
