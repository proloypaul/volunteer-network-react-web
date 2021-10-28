import React, { useEffect, useState } from 'react';
import './Admin.css';

const Admin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const url = `http://localhost:4000/users`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    const handleDelete = id => {
        // console.log(id)
        const url = `http://localhost:4000/users${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then()
    }
    return (
        <div>
            <h1>Admin section</h1>
            <div className="admin_users">
                <div>
                    <h1>Admin</h1>
                </div>
                <div>
                    {users.map(user => <div 
                    key={user._id}
                    className="users"
                    >
                        <h3>{user.name}</h3>
                        <h3>{user.email}</h3>
                        <h3>{user.date}</h3>
                        <h3><button onClick={() => handleDelete(user._id)}>Delete</button></h3>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Admin;