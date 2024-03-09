import React from 'react';
import { BtnClose } from '../../common/modalElements/BtnClose';
// import { Input } from 'components/common/modalElements/Input';
import * as S from './DeleteProfile.styled';


export const DeleteProfile = ( { onDeleteProfileModalClose } ) => {
    // eslint-disable-next-line no-unused-vars
    const reasonsToDelete = [
        'Незадоволеність послугами',
        'Надмірний спам',
        'Зміни в умовах обслуговування',
        'Особисті причини',
        'Технічні проблеми',
        'Інше'
    ];

    return (
        <S.Container>
            <BtnClose onActiveModal={ onDeleteProfileModalClose } />
            <S.Title>Видалення профілю</S.Title>
            {/* <Input
                type="text"
                name="topic"
                placeholder="Причина видалення"
                // isStar={ true }
                // error={ errTopic }
                // value={ values.topic }
                dropdown
                data={ reasonsToDelete }
                // formik={ formik }
                $topic
                readOnly
                // component="delete-profile"
            /> */}
            
        </S.Container>
    );
};
