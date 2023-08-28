import React from 'react';
import { useLoaderData } from 'react-router';

const FriendDetail = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h3>name: {data.name}</h3>
            <h2>userName: {data.username}</h2>
            <h1>email:{data.email}</h1>
        </div>
    );
};

export default FriendDetail;