import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {

    const [friend, setFriend] = useState({});
    const {name, username, email, phone, website} = friend;
    const {friend_id} = useParams();


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friend_id}`)
        .then(res => res.json())
        .then(data => setFriend(data) )

    }, [])
    
    return (
        <div>
            <h1>Friends details of Id: {friend_id} </h1>
            <h2> Name: {name} </h2>
            <p> UserName: {username} </p>
            <p>Email: {email}</p>
            <p>Phone: {phone} </p>
            <p>Website: {website} </p>
        </div>
    );
};

export default FriendDetail;