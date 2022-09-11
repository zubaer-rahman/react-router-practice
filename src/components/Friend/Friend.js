import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id, name, email} = friend;
    const history = useNavigate();
    const friendStyle = {
        border:  "1px solid gray",
        margin: "20px",
        padding: "20px",
        borderRadius: "20px"
    }

    const handleClick = (friend_id) => {
        history(`/friend/${friend_id}`)
    }

    return (
        <div style={friendStyle}> 
            <h2> Name: {name} </h2>
            <p> Id: {id} </p>
            <p> Email: {email} </p>
            {/* <Link to={`/friend/${id}`}> <button> See Details </button> </Link> */}
            <button  onClick={() => handleClick(id)}> See Details </button>
        </div>
    );
};

export default Friend;