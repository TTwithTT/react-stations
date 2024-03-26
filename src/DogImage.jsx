// @ts-check
import React from 'react';

export const DogImage = (props) => {
  return (
    <div>
      <img src={props.imageUrl} alt="cute dog" />
    </div>
  );
}

export default DogImage
