import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api');
                const data = response.data.results;
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="user-list">
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.login.uuid}>
                        <div className="user-item">
                            <img src={user.picture.thumbnail} alt="User Thumbnail" className="user-avatar" />
                            <div className="user-info">
                                <span className="user-name">{user.name.first} {user.name.last}</span>
                                <span className="user-email">{user.email}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};


const App = () => {
    return (
        <div>
            <UserList />
        </div>
    );
};

export default App;