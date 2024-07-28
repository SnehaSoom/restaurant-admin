// src/components/RestaurantList.js
import React from 'react';
import RestaurantItem from './RestaurantItem';
import '../styles/App.css';

const RestaurantList = ({ restaurants, onDelete, onEdit }) => {
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          restaurant={restaurant}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
