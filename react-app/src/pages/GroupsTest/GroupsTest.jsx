import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function GroupsTest() {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get('http://localhost:8000/api/users/', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access')}`
                    }
                });
                setUsers(response.data);
            } catch (error) {
                setError('Error fetching users');
                console.error('There was an error!', error);
            }
        }

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Users</h2>
            {error ? <p>{error}</p> : (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.username} - Groups: {user.groups.map(group => group.name).join(', ')}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
