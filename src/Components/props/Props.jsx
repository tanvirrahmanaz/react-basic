import React from 'react';


const Props = ({
    name='guest', 
    age=0, 
    location='Unknown', 
    message='default props'
}) => {
    return (
        <div className='border p-4 m-2'>
            <h2>Name: {name}  </h2>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
            <p>Message: {message}</p>
        </div>
    );
};



export default Props;