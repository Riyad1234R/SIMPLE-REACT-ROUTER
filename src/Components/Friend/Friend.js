import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const{id,name,username,email,address}=props.friend;
    const friendStyle={
        border:'3px solid goldenrod',
        padding:'10px',
        borderRadious:'10px'
    }
    return (
        <div style={friendStyle}>
            <h2>I am:{name}{id}</h2>
            <h5>Call me:{username}</h5>
            <p>Visite my:{email}</p>
            <p><small>I live in:{address.city}</small></p>
            <Link to={`/frienddetail/${id}`}>Visite Me</Link>
        </div>
    );
};

export default Friend;