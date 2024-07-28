// src/components/AddRestaurant.js
import React, { useState } from 'react';
import '../styles/Form.css';

const AddRestaurant = ({ addRestaurant }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && location) {
      addRestaurant({ name, description, location });
      setName('');
      setDescription('');
      setLocation('');
      setError('');
    } else {
      setError('All fields are required');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Restaurant</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Add Restaurant</button>
    </form>
  );
};

export default AddRestaurant;
