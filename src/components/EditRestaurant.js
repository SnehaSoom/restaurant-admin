// src/components/EditRestaurant.js
import React, { useState } from 'react';
import '../styles/Form.css';

const EditRestaurant = ({ restaurant, updateRestaurant }) => {
  const [name, setName] = useState(restaurant.name);
  const [description, setDescription] = useState(restaurant.description);
  const [location, setLocation] = useState(restaurant.location);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && location) {
      updateRestaurant({ ...restaurant, name, description, location });
      setError('');
    } else {
      setError('All fields are required');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Edit Restaurant</h2>
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
      <button type="submit">Update Restaurant</button>
    </form>
  );
};

export default EditRestaurant;
