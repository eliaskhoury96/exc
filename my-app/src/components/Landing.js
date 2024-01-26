import React from 'react';

const Landing = ({user, hottest}) => {
    return (
        <div>
        <h1>Welcome, {user} ,Hottest Item: {hottest.item}, Price: ${hottest.price}</h1>
        </div>
    );
}



export default Landing; 