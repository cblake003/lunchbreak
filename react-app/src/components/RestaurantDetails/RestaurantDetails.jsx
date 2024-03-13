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
      {/* render all the categories here */}
      {/* conditionally render the items for the categories
      Get all Restaurant Details from API call on this page - don't need to call on each component */}
      {/* have it return an array of objects so the object is structured to have all the details */}
      {/* save as a piece of state and update that state */}
      {/* create a view function to make that initial call and get all details */}
      {/* nested structure - array of objects */}
      <Category restaurantId={restaurantId} />
    </div>
  );
};