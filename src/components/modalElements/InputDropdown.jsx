import React, { useState } from 'react';
import { IconSvg } from '../common/IconSvg';
import { DropdownList } from './DropdownList';
import * as S from './InputDropdown.styled';

export const InputDropdown = ( { data, formik } ) => {
    const [ isDropdownShown, setIsDropdownShown ] = useState( false );

    const handleTopicSelect = ( formik, value ) => {
        formik.setFieldValue( 'topic', value );
        setIsDropdownShown( !isDropdownShown );
    };

    return (
        <>
            <S.DropdownBtn
                type="button"
                aria-label="dropdown-menu"
                onClick={ () => setIsDropdownShown( !isDropdownShown ) }
                $rotate={ isDropdownShown }
            >
                <div>
                    <IconSvg width="11px" height="11px" icon="icon-arrow-down" />
                </div>
            </S.DropdownBtn>
            { isDropdownShown && (
                <DropdownList
                    data={ data }
                    handleTopicSelect={ ( formik, value ) =>
                        handleTopicSelect( formik, value )
                    }
                    formik={ formik }
                />
            )}
        </>
    );
};
