import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

export default function RestaurantDetailPage() {
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/restaurants/{id}/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch restaurant details");
        }
        const data = await response.json();
        setRestaurant(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRestaurantDetails();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!restaurant) {
    return <div>No restaurant found</div>;
  }
  return (
    <div>
      <div>
        <img src={restaurant.image} alt={restaurant.name} />
        <h1>{restaurant.name}</h1>
        <p>{restaurant.description}</p>
        <p>{restaurant.address}</p>
        <p>{restaurant.phone}</p>
        <p>{restaurant.website}</p>
      </div>
    </div>
  );
}
