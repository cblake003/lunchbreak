import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import api from '../../utilities/user-services';
import Category from './Category';

export default function RestaurantDetails() {
    const { id } = useParams(); // This extracts the "id" param from the URL
  const { data: restaurant, error, loading, request } = useApi();

  useEffect(() => {
    // Use the extracted ID in the API call
    request(api.get, `/restaurants/${id}/`);
  }, [id, request]); // Add "id" to the dependency array to refetch if the ID changes

//   if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h2>{restaurant?.name}</h2>
      <p>Address: {restaurant?.address}</p>
      <p>Phone: {restaurant?.contact_phone}</p>
      <Category restaurantId={restaurantId} />
    </div>
  );
};