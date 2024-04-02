import React, { useEffect } from 'react';
import useApi from '../../hooks/useApi'; 
import api from '../../utilities/user-services';
import Option from './Option';
import { useState } from 'react';
import OptionValue from './OptionValue';

export default function MenuItem({ menuItem }) {
  // const { data: menuItems, error, loading, request } = useApi();
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  // useEffect(() => {
   
  //   request(api.get, `/menu-items/?categoryId=${categoryId}`);
  // }, [categoryId, request]);

//   if (loading) return <p>Loading categories...</p>;
  // if (error) return <p>Error fetching categories: {error.message}</p>;

  return (
    <li>
      <div onClick={() => setIsOptionsVisible(!isOptionsVisible)}>
        {menuItem.name} - ${menuItem.price}
        {menuItem.options && menuItem.options.length > 0 && (
          <span style={{ cursor: 'pointer' }}> ⌄</span>
        )}
      </div>
      <p>{menuItem.description}</p>
        {isOptionsVisible && 
          <div>
            {menuItem.options.map(option => (
              <OptionValue key={option.id} option={option} />
            ))}
          </div>
        }
    </li>
  );
}
  
  // <div>
  //   <h3>Menu Items</h3>
  //   {menuItems?.length > 0 ? (
  //     <ul>
  //     {menuItems.map((menuItem) => (
  //         <div key={menuItem.id}>
  //             <h3>
  //               <span style={{ cursor: 'pointer' }} onClick={() => setIsOptionsVisible(!isOptionsVisible)}>⌄</span>
  //               {menuItem.name} - {menuItem.price}
  //             </h3>
  //             <p>{menuItem.description}</p>
  //             {isOptionsVisible && <Option menuItemId={menuItem.id} />}
  //         </div>
  //       ))}
  //     </ul>
  //   ) : (
  //     <p>No menu items to display</p>
  //   )}
  // </div>
