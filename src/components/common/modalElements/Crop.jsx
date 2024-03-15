import React, { useRef, useState, useEffect } from 'react';
import ReactCrop, { centerCrop, makeAspectCrop, } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';


export const Crop = ( { image, configuration, onDataToCrop } ) => {
  const { targetWidth, targetHeight, circularCrop, aspect } = configuration;
  const imgRef = useRef( null );
  const previewCanvasRef = useRef( null );
  const [ crop, setCrop ] = useState();

  const handleImageLoad = e => {
    const { width, height } = e.currentTarget;

    const cropWidthInPercent = ( targetWidth / width ) * 100;
    const cropHeightInPercent = ( targetHeight / height ) * 100;
    console.log( '1' );
    const crop = makeAspectCrop(
      {
        unit: '%',
        width: cropWidthInPercent,
        height: cropHeightInPercent,
      },
      aspect,
      width,
      height
    );
    // console.log( crop, width, height );
    console.log( '2' );
    const centredCrop = centerCrop( crop, width, height );
    // console.log( centredCrop );
    setCrop( centredCrop );
    console.log( '3' );
  };

  useEffect( () => (
    onDataToCrop( { imgRef, previewCanvasRef, crop } )
  ), [ crop ] );

  return (
    <>
      <ReactCrop
        crop={ crop }
        circularCrop={ circularCrop } // true or false
        keepSelection
        aspect={ aspect }
        width={ targetWidth }
        height={ targetHeight }
        onChange={ ( pixelCrop, percentCrop ) => setCrop( percentCrop ) }
      >
        <img
          ref={ imgRef }
          src={ image }
          alt="Обране фото"
          onLoad={ handleImageLoad }
        />
      </ReactCrop>

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
      ) }
    </>
  );
};
