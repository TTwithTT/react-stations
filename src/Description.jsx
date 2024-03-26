// @ts-check
import React, { useState } from 'react';
import DogImage from './DogImage';

export const Description = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');

    const updateDogImage =() => {
    setDogUrl('https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg ')
  };
  return (
    <div>
      <p>犬の画像を表示するサイトです</p>
      <DogImage imageUrl={dogUrl} />
      <button onClick={updateDogImage}>更新</button>
    </div>
  )

}

export default Description

  // const fetchRandomDogImage = () => {
  //   fetch('https://dog.ceo/api/breeds/image/random')
  //     .then(response => response.json())
  //     .then(data => setDogUrl(data.message))
  //     .catch(error => console.error('Error fetching dog image:', error));
  // };

{/* <button onClick={fetchRandomDogImage}>ランダム</button> */}
