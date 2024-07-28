// src/components/RestaurantItem.js
import React from 'react';
import '../styles/App.css';

const RestaurantItem = ({ restaurant, onDelete, onEdit }) => {
  return (
    <div className="restaurant-item">
      <h3>{restaurant.name}</h3>
      <p>{restaurant.description}</p>
      <p>{restaurant.location}</p>
      <button onClick={() => onEdit(restaurant)}>Edit</button>
      <button onClick={() => onDelete(restaurant.id)}>Delete</button>
    </div>
  );
};

export default RestaurantItem;
