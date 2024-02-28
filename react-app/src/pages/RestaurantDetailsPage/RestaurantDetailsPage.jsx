import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function RestaurantDetailsPage() {

  return (
    // need to render every category that the restaurant has set up
    // need to grab from the model what pieces that restaurant specifically has
    // Remember options for the menu items - conditionally render the options and the values for those options
    // 
    <div>
      <h1>Restaurant Name</h1>
      <h2>Menu Items</h2>
      <ul>
        Menu Item 1
            <li>Category</li>
            <li>Options</li>
      </ul>
    </div>
  );
};
