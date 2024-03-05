import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import api from '../../utilities/user-services';
import Category from '../../components/RestaurantDetails/Category';
import MenuItem from '../../components/RestaurantDetails/MenuItem';

export default function RestaurantDetailsPage() {
    const { id: restaurantId } = useParams();
    const { data: restaurantDetails, error, loading, request } = useApi();

    useEffect(() => {
      const endpoint = `/api/restaurants/${restaurantId}/details`;
      request(api.get, endpoint);
    }, [restaurantId, request]);

    // if (loading) return <p>Loading restaurant details...</p>;
    if (error) return <p>Error: {error.message}</p>;

    function handleMenuItemClick(itemId) {
      console.log("menu item clicked")
    }

    return (
        <div>
          <h2>{restaurantDetails?.name}</h2>
          
          {restaurantDetails?.categories?.map((category) =>
            <div key={category.id}>
              <h3>{category.name}</h3>
              <ul>
                {category.menuItems.map((menuItem) =>
                  <li key={menuItem.id} onClick={() => handleMenuItemClick(menuItem.id)}>
                    <h4>{menuItem.name} - ${menuItem.price}</h4>
                    <p>{menuItem.description}</p>
                    <div id={`options-${menuItem.id}`} style={{ display: `none` }}>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
    );
}
