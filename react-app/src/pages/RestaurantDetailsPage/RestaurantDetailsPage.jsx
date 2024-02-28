import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import api from '../../utilities/user-services';
import Category from '../../components/Category/Category';
import MenuItem from '../../components/MenuItem/MenuItem';

export default function RestaurantDetailsPage() {
    const { id: restaurantId } = useParams();
    const { data: restaurant, error, loading, request } = useApi();
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    useEffect(() => {
        request(api.get, `/restaurants/${restaurantId}/`);
    }, [restaurantId, request]);

    const handleCategorySelection = (categoryId) => {
        setSelectedCategoryId(categoryId);
    };

    // if (loading) return <p>Loading restaurant details...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>{restaurant?.name}</h2>
            <p>Address: {restaurant?.address}</p>
            <p>Phone: {restaurant?.contact_phone}</p>
            <h3>Select a category:</h3>
            <Category restaurantId={restaurantId} onSelect={handleCategorySelection} />
            {selectedCategoryId && (
                <div>
                    <h3>Menu Items</h3>
                    <MenuItem categoryId={selectedCategoryId} />
                </div>
            )}
        </div>
    );
}
