import React, { useState } from 'react';
import axios from 'axios';

const ChangeNamePage = () => {
    const [firstName, setFirstName] = useState('');
    const [userInfo, setUserInfo] = useState({ email: '', first_name: '', username: '' });
    const [message, setMessage] = useState('');

    // Function to get CSRF token from cookies
    const getCsrfToken = () => {
        return document.cookie.split('; ').find(row => row.startsWith('csrftoken=')).split('=')[1];
    };

    // Function to handle the submission of the new first name
    const handleChangeFirstName = async (e) => {
        e.preventDefault();
        const csrfToken = getCsrfToken();
        
        try {
            await axios.post('/api/change-name/', { first_name: firstName }, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                },
                withCredentials: true,
            });
            setMessage('First name updated successfully.');
            fetchUserInfo(); // Fetch user info after successful name change
        } catch (error) {
            console.error('Error changing first name:', error);
            setMessage('Failed to change first name.');
        }
    };

    // Function to fetch user information
    const fetchUserInfo = async () => {
        try {
            const response = await axios.get('/api/userinfo/', {
                withCredentials: true,
            });
            setUserInfo(response.data); // Assuming the response data structure matches the expected user info
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    };

    return (
        <div>
            <h2>User Profile</h2>
            <form onSubmit={handleChangeFirstName}>
                <label>
                    Change First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}

            <h3>User Information</h3>
            {userInfo && (
                <ul>
                    <li>Email: {userInfo.email}</li>
                    <li>First Name: {userInfo.first_name}</li>
                    <li>Username: {userInfo.username}</li>
                </ul>
            )}
        </div>
    );
};

export default ChangeNamePage;
