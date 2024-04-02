import React, { useEffect } from 'react';
import useApi from '../../hooks/useApi'; 
import api from '../../utilities/user-services';
import MenuItem from './MenuItem';

export default function Category({ category }) {
  const { data: categories, error, loading, request } = useApi();

  // useEffect(() => {
   
  //   request(api.get, `/categories/?restaurantId=${restaurantId}`);
  // }, [restaurantId, request]);

//   if (loading) return <p>Loading categories...</p>;
  // if (error) return <p>Error fetching categories: {error.message}</p>;

  return (
    <div>
      <h3>{category.name}</h3>
      <ul>
        {category.menuItems.map(menuItem => (
          <MenuItem key={menuItem.id} menuItem={menuItem} />
        ))}
      </ul>
    </div>
  );
}
