import React, { useRef, useState } from 'react';
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  convertToPixelCrop,
} from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { setCanvasPreview } from '../../../helpers/setCanvasPreview';

export const Crop = ( { image, clickCrop, onCroppedAvatar } ) => {
  const imgRef = useRef( null );
  const previewCanvasRef = useRef( null );
  const [ crop, setCrop ] = useState( {} );

  const handleImageLoad = e => {
    const { width, height } = e.currentTarget;

    const targetWidth = 300;
    const cropWidthInPercent = ( targetWidth / width ) * 100;

    const crop = makeAspectCrop(
      {
        unit: '%',
        width: cropWidthInPercent,
      },
      1,
      width,
      height
    );
    // console.log( crop, width, height );

    const centredCrop = centerCrop( crop, width, height );
    // console.log( centredCrop );
    setCrop( centredCrop );
  };

  const handleImageCrop = () => {
    setCanvasPreview(
      imgRef.current,
      previewCanvasRef.current,
      convertToPixelCrop( crop, imgRef.current.width, imgRef.current.height )
    );

    const dataUrl = previewCanvasRef.current.toDataURL(); // довгий рядок
    onCroppedAvatar( dataUrl );

    previewCanvasRef.current.toBlob(
      blob => {
        //   setBlobPhoto( blob );
        console.log( 'blob:', blob );
      },
      'image/jpeg',
      0.8
    );
  };

  if ( clickCrop ) {
    handleImageCrop();
  }

  return (
    <div className="image-container">
      <ReactCrop
        crop={ crop }
        circularCrop
        keepSelection
        aspect={ 1 }
        onChange={ ( pixelCrop, percentCrop ) => setCrop( percentCrop ) }
      >
        <img
          className="prosedure_image"
          ref={ imgRef }
          src={ image }
          alt="Обране фото"
          onLoad={ handleImageLoad }
        />

        {crop && (
          <canvas
            ref={ previewCanvasRef }
            style={ {
              display: 'none',
              border: '1px solid black',
              objectFit: 'contain',
              width: 150,
              height: 150,
            } }
          />
        )}
      </ReactCrop>
    </div>
  );
};
