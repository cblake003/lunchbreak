import React, { useEffect } from 'react';
import useApi from '../../hooks/useApi'; 
import api from '../../utilities/user-services';
import MenuItem from './MenuItem';

export default function Category({ restaurantId }) {
  const { data: categories, error, loading, request } = useApi();

  useEffect(() => {
   
    request(api.get, `/categories/?restaurantId=${restaurantId}`);
  }, [restaurantId, request]);

//   if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error fetching categories: {error.message}</p>;

  return (
    <div>
      <h3>Categories</h3>
      {categories?.length > 0 ? (
        categories.map((category) => (
          <div key={category.id}>
            <h4>{category.name}</h4>
            {/* Render MenuItem component for each category */}
            <MenuItem categoryId={category.id} />
          </div>
        ))
      ) : (
        <p>No categories to display</p>
      )}
    </div>
  );
}
