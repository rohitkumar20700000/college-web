import React from 'react';
import './App.css'; // Ensure the CSS is imported
import { Routes } from 'react-router-dom';

const Home = () => (
    <div className="home-container">

        <div className="home-content">
            <h1 className="home-title">Welcome to Saveetha Engineering  College</h1>
            <p className="home-subtitle">Your future starts here. Learn more about our programs and events.</p>
        </div>
    </div>
);

export default Home;