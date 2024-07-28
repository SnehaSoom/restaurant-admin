// src/pages/ManageRestaurant.js
import React, { useState } from 'react';
import AddRestaurant from '../components/AddRestaurant';
import EditRestaurant from '../components/EditRestaurant';
import RestaurantList from '../components/RestaurantList';

const ManageRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [editingRestaurant, setEditingRestaurant] = useState(null);

  const addRestaurant = (restaurant) => {
    setRestaurants([...restaurants, { ...restaurant, id: Date.now() }]);
  };

  const updateRestaurant = (updatedRestaurant) => {
    setRestaurants(
      restaurants.map((restaurant) =>
        restaurant.id === updatedRestaurant.id ? updatedRestaurant : restaurant
      )
    );
    setEditingRestaurant(null);
  };

  const deleteRestaurant = (id) => {
    setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
  };

  return (
    <div>
      <h1>Manage Restaurants</h1>
      {editingRestaurant ? (
        <EditRestaurant
          restaurant={editingRestaurant}
          updateRestaurant={updateRestaurant}
        />
      ) : (
        <AddRestaurant addRestaurant={addRestaurant} />
      )}
      <RestaurantList
        restaurants={restaurants}
        onDelete={deleteRestaurant}
        onEdit={setEditingRestaurant}
      />
    </div>
  );
};

export default ManageRestaurant;
