import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import api from '../../utilities/user-services'; // Ensure this path matches your project structure

const RestaurantMenuPage = () => {
    const { restaurantId } = useParams();
    const { data, error, loading, request } = useApi();

    // Function to initiate API request for restaurant details
    const loadRestaurantDetails = () => {
        request(api.getRestaurantDetails, restaurantId);
    };

    // Function to initiate API request for menu items
    const loadMenuItems = () => {
        request(api.getMenuItemsForRestaurant, restaurantId);
    };

    // Fetch restaurant details and menu items on component mount or when restaurantId changes
    useEffect(() => {
        loadRestaurantDetails();
        loadMenuItems();
    }, [restaurantId]);

    // Conditional rendering based on loading and error states
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data: {error.message}</div>;

    // Assuming `data` contains restaurant details and menu items aggregated, adjust accordingly
    const restaurantDetails = data?.restaurant; // Adjust based on your API response structure
    const menuItems = data?.menuItems; // Adjust based on your API response structure

    return (
        <div>
            <h2>Menu for {restaurantDetails?.name}</h2>
            {menuItems && menuItems.length > 0 ? (
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <p>{item.description}</p>
                            {/* Implement functionality for adding items to an order */}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No menu items found.</p>
            )}
        </div>
    );
};

export default RestaurantMenuPage;
