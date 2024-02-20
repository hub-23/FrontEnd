import React, { useEffect, useState } from 'react';

export const HeroFieldSelect = ( { data, valueInput, filterProperty, submit } ) => {
  const [ isActive, setIsActive ] = useState( false );

  useEffect( () => {
    if ( valueInput.length >= 3 ) {
      return setIsActive( true );
    }
    setIsActive( false );
  }, [ valueInput ] );

  const getFiltered = ( data, value, property ) => {
    const normalizedValue = value.toLowerCase();

    const listAll = data.flatMap( ( el ) => el[ `${property}` ] );
    const listUnique = listAll.filter( ( el, idx, arr ) => arr.indexOf( el ) == idx );
    const listFiltered = listUnique.filter( ( el ) => el.toLowerCase().includes( normalizedValue ) );
    const listSorted = [ ...listFiltered ].sort( ( a, b ) => ( a > b ? 1 : -1 ) );

    if ( !listSorted.length ) setIsActive( false );
    return listSorted;
  };

  const submitSelectValue = ( value ) => {
    submit( { [ filterProperty ]: value } );

    setTimeout( () => {
      setIsActive( false );
    }, 10 );
  };

  return (
    <>
      {isActive && (
        <div
          style={ {
            position: 'absolute',
            left: '0',
            top: '75px',
            padding: '15px',
            minWidth: '300px',
            maxHeight: '250px',
            border: '1px solid gray',
            borderRadius: '10px',
            backgroundColor: 'white',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
          } }
        >
          <ul>
            {getFiltered( data, valueInput, filterProperty ).map( ( el ) => {
              return (
                <li
                  style={ { display: 'flex', gap: '15px', cursor: 'pointer' } }
                  key={ el }
                  onClick={ () => {
                    submitSelectValue( el );
                  } }
                >
                  <p>{el}</p>
                </li>
              );
            } )}
          </ul>
        </div>
      )}
    </>
  );
};
