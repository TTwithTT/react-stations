// @ts-check
import React, { useEffect, useState } from 'react';
import BreedsSelect from './BreedsSelect';
import DogImage from './DogImage';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    fetchDogList();
  }, []);

  const fetchDogList = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const breedList = Object.keys(data.message);
        setBreeds(breedList);
      })
      .catch(error => console.error('Error fetching dog image:', error));
  };

  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
  }

  const fetchDogImages = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then(response => response.json())
      .then(data => setDogImages(data.message))
      .catch(error => console.error('Error fetching dog images:', error));
  }

  return (
    <div>
      <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onChange={handleBreedChange} />
      <button onClick={fetchDogImages}>表示</button>
      <div>
        {dogImages.map((image) => (
          <DogImage imageUrl={image} />
        ))} 
      </div>
    </div>
  );
}

export default DogListContainer
