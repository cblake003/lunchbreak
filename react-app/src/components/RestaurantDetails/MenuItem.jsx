import React, { useEffect } from 'react';
import useApi from '../../hooks/useApi'; 
import api from '../../utilities/user-services';
import Option from './Option';

export default function MenuItem({ categoryId }) {
  const { data: menuItems, error, loading, request } = useApi();

  useEffect(() => {
   
    request(api.get, `/menu-items/?categoryId=${categoryId}`);
  }, [categoryId, request]);

//   if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error fetching categories: {error.message}</p>;

  return (
    <div>
      <h3>Menu Items</h3>
      {menuItems?.length > 0 ? (
        <ul>
        {menuItems.map((menuItem) => (
            <div key={menuItem.id}>
                <h3>{menuItem.name} - {menuItem.price}</h3>
                <p>{menuItem.description}</p>
                <Option menuItemId={menuItem.id} />
            </div>
          ))}
        </ul>
      ) : (
        <p>No menu items to display</p>
      )}
    </div>
  );
}
