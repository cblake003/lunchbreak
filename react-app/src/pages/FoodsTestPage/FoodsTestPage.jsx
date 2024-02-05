import React, {useEffect} from 'react'
import useApi from '../../hooks/useApi';
import api from '../../utilities/user-services';

export default function FoodsTestPage() {
    const { data: foods, error, loading, request } = useApi();

    useEffect(() => {
        request(api.get, '/foods/');
    }, []);

    // if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div>
            <h2>Food List</h2>
            {foods ? (
                <ul>
                    {foods.map(food => (
                        <li key={food.id}>{food.title}, {food.description} - Completed: {food.completed ? 'True' : 'False'}</li>
                    ))}
                </ul>
            ) : (
                <p>No food to display</p>
            )}
        </div>
    );
}
