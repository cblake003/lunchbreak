import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import api from '../../utilities/user-services';
import Category from '../../components/RestaurantDetails/Category';
import MenuItem from '../../components/RestaurantDetails/MenuItem';
import Option from '../../components/RestaurantDetails/Option';

export default function RestaurantDetailsPage() {
    // const { id: restaurantId } = useParams();
    // const { data: restaurantDetails, error, loading, request } = useApi();

    // useEffect(() => {
    //   const endpoint = `/api/restaurants/${restaurantId}/details`;
    //   request(api.get, endpoint);
    // }, [restaurantId, request]);

    // if (loading) return <p>Loading restaurant details...</p>;
    // if (error) return <p>Error: {error.message}</p>;

// backend will likely return array of objects with option value and then price
    const [visibleOptionsId, setVisibleOptionsId] = useState(null);

    const restaurantOne = {
      name: "The Great Eatery",
      categories: [
        {
          id: 1,
          name: "Breakfast",
          menuItems: [
            {
            id: 1,
            name: "Pancakes",
            desription: "Fluffy pancakes with syrup",
            price: 5.99,
            options: [
              {
                id: 1001,
                name: "Add strawberries",
                price: 1.99,
                is_multiple: true,
                is_required: false
              }
            ]
            },
            {
              id: 2,
              name: "Eggs Benedict",
              description: "regular ole Eggs Benny",
              price: 7.99,
            },
          ],
        },
        {
          id: 2,
          name: "Lunch",
          menuItems: [
            {
              id: 3,
              name: "Cheeseburger",
              description: "Yummy",
              price: 14.99
            },
            {  id: 4,
              name: "Caesar Salad",
              description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese",
              price: 6.99,
            },
          ],
        },
      ],
    }
      const restaurantDetails = restaurantOne;
      if (!restaurantDetails) return <p>Loading...</p>

    function handleMenuItemClick(itemId) {
      setVisibleOptionsId(prevVisibleOptionsId => prevVisibleOptionsId === itemId ? null : itemId);
      // TAKE TO OPTION COMPONENT
    }

    return (
      <div>
          <h2>{restaurantOne.name}</h2>
          {restaurantDetails?.categories.map(category => (
              <div key={category.id}>
                  <h3>{category.name}</h3>
                  <ul>
                      {category.menuItems.map(menuItem => (
                          <li key={menuItem.id} onClick={() => handleMenuItemClick(menuItem.id)} style={{ cursor: 'pointer' }}>
                              <h4>{menuItem.name} - ${menuItem.price}</h4>
                              <p>{menuItem.description}</p>
                              {visibleOptionsId === menuItem.id && (
                                  <Option options={menuItem.options} />
                              )}
                          </li>
                      ))}
                  </ul>
              </div>
          ))}
      </div>
  );
}


// you can select multiple option values for toppings, but you'd only want to select one option for protein. Keep this in mind when rendering. Option model is being adjusted to have 2 new properties - if it's required or not, if it's single or multiple selection
// will need to do conditional rendering on what type of dropdown it is based on that
// form validation on frontend to make sure that the option is selected in order for it to be added to the cart
// will need to set up form on my end, then Ben's end will validate it
// styling needs overflow so that it's scrollable but doesn't span the page infinitely
// piece of state with a big array of objects and menu items for saving the options
// if it's able to select multiple, you're going to have to append it so it doesn't delete the other option that they chose
// also need to keep in mind if they deselect from the multiple options
// for option that is only single select, any new selection will then setOptionValue to the new selection
// might need to use id or dictionary to find that selection; could use hash implementation