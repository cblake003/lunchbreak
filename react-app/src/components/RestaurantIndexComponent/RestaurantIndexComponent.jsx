import React from "react";
import { useState, useEffect } from "react";
import api from "../../utilities/user-services";
import { useApi } from "../../hooks/useApi";

export default function RestaurantIndexComponent({ selectedDay }) {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { request } = useApi();

  // Fetches restaurants by day

  useEffect(() => {
    const fetchRestaurantsByDay = async (day) => {
      setIsLoading(true);
      try {
        const response = await api.get(`/restaurants/${day}`);
        setRestaurants(response.data);
        setError(null);
      } catch (error) {
        console.log("Error fetching restaurants by day:", error);
        setError(error.message);
      } finally {
        setIsLoading(false); // Set loading state to false when the request is completed
      }
    };

    if (selectedDay) {
      fetchRestaurantsByDay(selectedDay);
    } else {
      // If no day is selected, set restaurants to an empty array
      setRestaurants([]);
      setError(null);
    }
  }, [selectedDay, api]);

  if (!selectedDay) {
    return <div>Please select a day to see available restaurants</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error}</div>;
  } else {
    return (
      <div>
        <h2>Restaurants</h2>
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <img src={restaurant.image} className="w-24" alt="" />
              <h3>{restaurant.name}</h3>
              <p>{restaurant.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
