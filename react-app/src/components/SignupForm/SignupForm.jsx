import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../utilities/user-services'; // Ensure these functions handle API calls appropriately
import { UserContext } from '../../hooks/userContext';
import api from '../../utilities/user-services'; // Assuming this exports configured Axios instance

export default function SignupForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [passwordConfirm, setPasswordConfirm] = useState(''); // Added for password confirmation
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle password confirmation change
    const handlePasswordConfirmChange = (e) => {
        setPasswordConfirm(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, email, password } = formData;

        // Check if passwords match before submitting
        if (password !== passwordConfirm) {
            setError('Passwords do not match.');
            return; // Prevent form submission
        }

        try {
            console.log({ username, email, password }); // Confirm payload structure
            const signupResponse = await signup({ username, email, password });
            // Assuming login updates localStorage for tokens
            // const userInfo = await login(username, password); 
            if (signupResponse) {
                fetchUserInfo()
            }
        } catch (error) {
            setError('Failed to sign up. Please try again.');
            console.error('Signup error', error);
        }
    };

    const fetchUserInfo = async () => {
        try {
            const response = await api.get('/userinfo/');
            if (response && response.data) {
                setUser(response.data); // Update UserContext with fetched user info
                navigate('/'); // Navigate to the homepage or dashboard after login
            }
        } catch (error) {
            console.error('Error fetching user info:', error);
            setError('Could not fetch user information.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Username"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Email"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Password"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="passwordConfirm" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                <input
                    type="password"
                    name="passwordConfirm"
                    id="passwordConfirm"
                    value={passwordConfirm}
                    onChange={handlePasswordConfirmChange}
                    className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Confirm Password"
                    required
                />
            </div>
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Sign Up
                </button>
            </div>
        </form>
    );
}
