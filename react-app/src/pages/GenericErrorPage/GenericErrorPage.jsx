import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function GenericErrorPage({ message }) {
    const navigate = useNavigate();

    return (
        <div className="container mx-auto p-4 text-center">
            <h1 className="text-2xl font-bold">Error</h1>
            <p>{message || 'An unexpected error occurred.'}</p>
            <button 
                onClick={() => navigate('/')} 
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Go Home
            </button>
        </div>
    );
};
