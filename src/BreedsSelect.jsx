// @ts-check
import React from 'react';

export const BreedsSelect = ({ breeds, selectedBreed, onChange }) => {
  return (
    <select value={ selectedBreed } onChange={onChange}>
      {breeds.map(breed => (
        <option key={breed} value={breed}>{breed}</option>
      ))}
    </select>
  );
}

export default BreedsSelect
