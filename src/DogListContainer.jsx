// @ts-check
import React, { useEffect, useState } from 'react';
import BreedsSelect from './BreedsSelect';
import DogImage from './DogImage';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [dogImages, setDogImages]

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

  return (
    <div>
      <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onChange={handleBreedChange} />
      <button onClick={fetchDogImage}>表示</button>
      <div>
        
      </div>
    </div>
  );
}

export default DogListContainer
