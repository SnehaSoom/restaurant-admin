// src/pages/Home.js
import React from 'react';

import ManageRestaurant from './ManageRestaurant';

const Home = () => {
  return (
    <div>
      <h1>Restaurant Admin</h1>
      <ManageRestaurant />
      {/* <Link to="/manage">Manage Restaurants</Link> */}
    </div>
  );
};

export default Home;
