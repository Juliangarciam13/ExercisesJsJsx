import { useState } from 'react';

const UserProfile = () => {
    const [user, setUser] = useState({ name: 'Julian Garcia', age: 30, email: 'julian@gmail.com' });

    const updateEmail = () => {
        setUser(prevUser => ({ ...prevUser, email: 'newemail@example.com' }));
    };

    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <button onClick={updateEmail}>Update Email</button>
        </div>
    );
};

export default UserProfile;