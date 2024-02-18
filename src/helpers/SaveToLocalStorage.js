import { useEffect } from 'react';
import { useFormikContext } from 'formik';

export const SaveToLocalStorage = ( { fieldName } ) => {
  const { values, setFieldValue } = useFormikContext();

  useEffect( () => {
    const storedValue = localStorage.getItem( `question-form-${fieldName}` );
    if ( storedValue !== null ) {
      setFieldValue( fieldName, storedValue );
    }
  }, [ fieldName, setFieldValue ] );

  useEffect( () => {
    localStorage.setItem( `question-form-${fieldName}`, values[ fieldName ] );
  }, [ values[ fieldName ], fieldName ] );

  return null;
};
