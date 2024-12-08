import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Greeting.css';

const Greeting = () => {
    const [greeting, setGreeting] = useState('');
    const [backgroundImage, setBackgroundImage] = useState('');
    useEffect(() => {
        axios.get('http://localhost:5000/greeting')
            .then(response => {
                setGreeting(response.data.greeting);
                setBackgroundImage(response.data.backgroundImage);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div 
        className="greeting-container" 
        style={{ backgroundImage: `url(/images/${backgroundImage})` }}

        >
            <h1 className="greeting-message">{greeting}</h1>
        </div>
    );
};

export default Greeting;
