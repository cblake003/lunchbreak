import React, { createContext, useState, useEffect } from 'react';
import api from '../utilities/user-services';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Attempt to use stored user info before fetching new data
        const storedUserInfo = localStorage.getItem('userInfo');
        if (storedUserInfo) {
            setUser(JSON.parse(storedUserInfo)); // Use stored user info
        } else {
            // Function to fetch user info from the backend
            const fetchUserInfo = async () => {
                const accessToken = localStorage.getItem('accessToken');
                if (!accessToken) return; // Exit if no access token is found

                try {
                    const response = await api.get('/userinfo/');
                    if (response && response.data) {
                        setUser(response.data); // Update UserContext with fetched user info
                        localStorage.setItem('userInfo', JSON.stringify(response.data)); // Store user info for future use
                    }
                } catch (error) {
                    console.error('Error fetching user info:', error);
                    localStorage.removeItem('userInfo'); // Clear user info if fetch fails
                    setUser(null);
                }
            };

            fetchUserInfo();
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
