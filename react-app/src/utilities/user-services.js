import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8000/api';
const API_BASE_URL = '/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true // Send cookies with each request
});

// Extract CSRF token from cookies
const getCsrfToken = () => {
    const csrfToken = document.cookie.split('; ').find(row => row.startsWith('csrftoken='));
    return csrfToken ? csrfToken.split('=')[1] : '';
};

// User login
export const login = async (username, password) => {
    const response = await api.post('/token/', { username, password });
    return response; // No need to return response.data for token handling
};

export const fetchUser = async () => {
    // Include CSRF token in the header for login request
    // const csrfToken = getCsrfToken();
    const response = await api.get('/userinfo/', {
        headers: {
            // 'X-CSRFToken': csrfToken,
        },
    });
    return response.data
    // No need to handle tokens here, as they are now HttpOnly cookies
};

// User signup
export const signup = async ({ username, email, password }) => {
    // Include CSRF token in the header for signup request
    const csrfToken = getCsrfToken();
    await api.post('/signup/', { username, email, password }, {
        headers: {
            'X-CSRFToken': csrfToken,
        },
    });
    // Assuming the backend responds with user info or a success message
};

// User logout
export const logout = async () => {
    // Include CSRF token in the header for logout request
    const csrfToken = getCsrfToken();
    await api.post('/logout/', {}, {
        headers: {
            'X-CSRFToken': csrfToken,
        },
    });
    // Assuming the backend clears the HttpOnly cookies
    // Optionally clear local storage of user-related info (not tokens)
    localStorage.removeItem('userInfo');
};


api.interceptors.response.use(
    response => response, // Success responses pass through
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            // Check the specific error message from the backend
            if (error.response.data.error === 'refresh_token_expired') {
                // Handle refresh token expiration specifically
                // e.g., redirect to login or show a modal
                console.error(error.response.data.detail);
                window.location.href = '/login'; // Redirect to login
                return Promise.reject(error);
            } else {
                originalRequest._retry = true;
                try {
                    // Attempt to refresh the token for other 401 errors
                    await api.post('/token/refresh/');
                    // Token refreshed successfully, retry the original request
                    return api(originalRequest);
                } catch (refreshError) {
                    // If the refresh attempt fails, handle accordingly
                    console.error('Unable to refresh token', refreshError);
                    window.location.href = '/login'; // Redirect to login as a fallback
                    return Promise.reject(refreshError);
                }
            }
        }
        // For errors other than 401 or subsequent retries, reject the promise
        return Promise.reject(error);
    }
);

const getRestaurantDetails = async (restaurantId) => {
    return await api.get(`/restaurants/${restaurantId}`);
};

const getMenuItemsForRestaurant = async (restaurantId) => {
    return await api.get(`/restaurants/${restaurantId}/menu_items`);
};

// export const getOrderDetails = async (employeeId) => {
//     const response = await api.get(`/orders/${employeeId}`);
//     return response.data; // Assuming your API returns the details directly
// };

export default api;

