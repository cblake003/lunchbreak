import { useState } from 'react';
import api from '../utilities/user-services'; 
import { useNavigate } from 'react-router-dom';

const useApi = () => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // modulates the data through this hook on the backend and uses those variables for what's being determined. It's almost like middleware that's processing API responses for you and then uses the variables that are defined in the useAPI hook
    const handleErrorResponse = (error) => {
        if (error.response) {
            const status = error.response.status;
            if (status === 403) {
                navigate('/forbidden');
            } else if (status === 404) {
                navigate('/not-found');
            } else {
                // Set error message for other types of errors
                setError({
                    status: status,
                    message: error.response.data.detail || 'An error occurred'
                });
            }
        } else {
            setError({ message: 'Network error' });
        }
    };

    const request = async (requestFn, ...args) => {
        setLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await requestFn(...args);
            setData(response.data);
            return response.data;
        } catch (error) {
            handleErrorResponse(error);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, request };
};

export default useApi;
