// src/components/OrderSummary.js

import React, { useEffect } from 'react';
import useApi from '../hooks/useApi';
import { getOrderDetails } from '../../utilities/user-services';

const OrderSummary = ({ employeeId }) => {
    const { data: orderDetails, error, loading, request } = useApi();

    useEffect(() => {
        request(() => getOrderDetails(employeeId));
    }, [employeeId, request]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h2>Order Summary</h2>
            {orderDetails ? (
                <>
                    <p>Restaurant: {orderDetails.restaurant?.name}</p>
                    <p>Order Date: {orderDetails.order_date}</p>
                    <p>Total Cost: ${orderDetails.total_cost}</p>
                </>
            ) : (
                <p>No order details available.</p>
            )}
        </div>
    );
};

export default OrderSummary;

