import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RestaurantDetailsPage = () => {
  const { restaurantId } = useParams();
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

//   useApi hook here instead of this to make the call. Don't need all this logic because useAPI 
  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        // Adjust the URL and API call as per your backend configuration
        const response = await axios.get(`/api/restaurants/${restaurantId}`);
        setRestaurantDetails(response.data);
      } catch (err) {
        setError('Failed to fetch restaurant details.');
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurantDetails();
  }, [restaurantId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{restaurantDetails?.name}</h1>
      {/* Render other restaurant details */}
      <ul>
        {restaurantDetails?.menuItems.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantDetailsPage;
