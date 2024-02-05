import React, { useState, useEffect } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignupForm from '../../components/SignupForm/SignupForm';
import axios from 'axios';

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        ensureCsrfToken();
    }, []);

    const ensureCsrfToken = async () => {
        // Check for CSRF token cookie; adjust based on your cookie handling method
        if (!document.cookie.split('; ').some(cookie => cookie.startsWith('csrftoken='))) {
            console.log('getting csrf token')
            const res = await axios.get('http://localhost:8000/api/csrf/', { withCredentials: true });
            console.log(res)
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-sm mx-auto my-10">
                <div className="text-center mb-6">
                    <h1 className="font-bold text-3xl text-gray-700">Welcome</h1>
                    <p className="text-gray-500">Please {isLogin ? 'Login' : 'Sign Up'}</p>
                </div>
                {isLogin ? <LoginForm /> : <SignupForm />}
                <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="mt-4 text-indigo-500 hover:text-indigo-600 text-sm font-semibold"
                >
                    {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
                </button>
            </div>
        </div>
    )
}
