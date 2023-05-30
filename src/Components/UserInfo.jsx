import React, { useState } from 'react';

const UserInfo = () => {
    const [user, setUser] = useState({ name: '', age: 0 });

    const handleNameChange = e => {
        setUser(prevUser => ({ ...prevUser, name: e.target.value }));
    };

    const handleAgeChange = e => {
        setUser(prevUser => ({ ...prevUser, age: parseInt(e.target.value) }));
    };

    return (
        <div>
            <input type="text" value={user.name} onChange={handleNameChange} />
            <input type="number" value={user.age} onChange={handleAgeChange} />
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
        </div>
    );
};

export default UserInfo;