import { useEffect } from 'react';
import { useFormikContext } from 'formik';

export const SaveToLocalStorage = ( { component, fieldName } ) => {
  const { values, setFieldValue } = useFormikContext();

  useEffect( () => {
    const storedValue = localStorage.getItem( `${component}-${fieldName}` );
    if ( storedValue !== null ) {
      setFieldValue( fieldName, storedValue );
    }
  }, [ fieldName, setFieldValue ] );

  useEffect( () => {
    localStorage.setItem( `${component}-${fieldName}`, values[ fieldName ] );
  }, [ values[ fieldName ], fieldName ] );

  return null;
};
