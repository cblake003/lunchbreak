import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../utilities/user-services';
import { UserContext } from '../../hooks/userContext';
import { fetchUser } from '../../utilities/user-services';


export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // Added to handle display of login errors
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const loginResponse = await login(username, password);
            if (loginResponse) {
                fetchUserInfo(); // Fetch user information after successful login
            }
        } catch (error) {
            setError('Failed to login. Please check your credentials.');
            console.error('Login error', error);
        }
    };
    
    const fetchUserInfo = async () => {
        try {
            const response = await fetchUser()
            console.log(`response: ${response} || JSON.stringify: ${JSON.stringify(response)} || response.data ${response.data}`)
            // if (response && response.data) {
            if (response) {
                localStorage.setItem('userInfo', JSON.stringify(response))
                setUser(response); // Update UserContext with fetched user info
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="******************"
                />
            </div>
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
            <div className="flex items-center justify-between">
                <button
                    className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Sign In
                </button>
            </div>
        </form>
    );
}
