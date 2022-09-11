import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
    const [friends, setFriends] = useState([]);

    useEffect(()=> {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
  
    }, [])
  
    return (
        <div>
            <h1> Friends: {friends.length}</h1>

            {
                friends.map(friend => <Friend friend={friend}  key={friend.id} />)
            }
        </div>
    );
};

export default Home;