import React from 'react';
import * as S from './FileUploadInput.styled';


export const FileUploadInput = ( { onImageSelect, id, ...props } ) => {
    const handleFileChange = async( e ) => {
        const inputFile = e.target.files[ 0 ];
    
        if ( !inputFile ) {
          return;
        }
    
        const maxSize = 5 * 1024 * 1024; // 5 МБ
        if ( inputFile.size > maxSize ) {
          alert( 'Розмір файлу перевищує 5 MB. Оберіть інший файл.' );
          return;
        }
    
        const allowedFileFormats = [
          'image/jpeg',
          'image/png',
          'image/gif',
          'image/webp',
        ];
    
        if ( !allowedFileFormats.includes( inputFile.type ) ) {
          alert(
              'Такий формат файлу не підтримується. Оберіть файл з розширенням .jpg, .png, .gif or .webp.',
          );
          return;
        }
    
        const reader = new FileReader();
        reader.onload = function( { target } ) {
          onImageSelect( target.result );
        };
        reader.readAsDataURL( inputFile );
      };

    return (
        <S.Input
            name="attachments"
            type='file'
            onChange={ handleFileChange }
            accept='image/jpeg,image/png,image/gif,image/webp'
            id={ id }
            { ...props }
        />
    );
};

// В батьківський компонент додати такий функціонал:
// const [ images, setImages ] = useState( storedImages );

// const handleImageSelect = ( value ) => {
//   if ( !images.includes( value ) ) {
//     setImages( ( prev ) => [ ...prev, value ] );
//   } else {
//     alert( 'Поточне зображення вже додано.' );
//   }
// };
