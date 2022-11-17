/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import ImageGallery from 'react-image-gallery';

export default function CustomGallery(props) {
  return (
    <ImageGallery
      autoPlay={false}
      showThumbnails
      showPlayButton={false}
      items={props.images}
      showIndex
      showFullscreenButton={false}
    />
  );
}
