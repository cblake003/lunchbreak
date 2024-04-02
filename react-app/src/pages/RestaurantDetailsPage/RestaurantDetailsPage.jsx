import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import api from '../../utilities/user-services';
import Category from '../../components/RestaurantDetails/Category';
import MenuItem from '../../components/RestaurantDetails/MenuItem';

export default function RestaurantDetailsPage() {
    // const { id: restaurantId } = useParams();
    // const { data: restaurantDetails, error, loading, request } = useApi();

    // useEffect(() => {
    //   // const endpoint = `/api/restaurants/${restaurantId}/details`;
    //   // request(api.get, endpoint);
    //   // }, [restaurantId, request]);

    //   request(api.get, '/api/restaurants/details');
    // }, [request]);

    // if (loading) return <p>Loading restaurant details...</p>;
    // if (error) return <p>Error: {error.message}</p>;

// backend will likely return array of objects with option value and then price

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
                name: "PROTEIN",
                price: 1.99,
                is_multiple: false,
                is_required: true,
                values: [
                  { id: 101, name: "Chicken" },
                  { id: 102, name: "Beef" },
                  { id: 103, name: "Tofu" }
                ]
              }
            ]
            },
            {
              id: 2,
              name: "Eggs Benedict",
              description: "regular ole Eggs Benny",
              price: 7.99,
              options: [
                {
                id: 1002,
                name: "Toppings",
                is_required: false,
                is_multiple: true,
                values: [
                  { id: 201, name: "Lettuce" },
                  { id: 202, name: "Tomato" },
                  { id: 203, name: "Onion" },
                ]
                }
              ]
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

      // setVisibleOptionsId(prevItemId => prevItemId === itemId ? null : itemId);
      // put this in menu item component and let that be responsibile for visibility state of menu items
      // approach from perspective of displaying items instead of looking at it for rendering on page
      // TAKE TO OPTION COMPONENT
    }

    return (
      <div>
          <h2>{restaurantDetails?.name}</h2>
          {restaurantDetails?.categories.map(category => (
              <div> 
                <Category key={category.id} category={category} />
              </div>
          ))}
      </div>
  );
}


// USE SEPARATE COMPONENT FOR MENU ITEM FOR A LITTLE CLEANER CODE - maintain piece of state for each menu item that keeps track of the visibility of it

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