import React, { useState, useEffect } from 'react';
import annual from "./assets/annual.png"
import tech from "./assets/tech_feast.jpg"
import cultural from "./assets/cultural.jpg"
import science from "./assets/science.jpg"
const eventsList = [
  {
    id: 1,
    event: "Tech Fest 2024",
    description: "A grand event showcasing the latest in technology.",
    image: tech
  },
  {
    id: 2,
    event: "Annual Sports Day",
    description: "A day filled with exciting sports activities.",
    image: annual
  },
  {
    id: 3,
    event: "Cultural Fest",
    description: "Celebrating diverse cultures with music and dance.",
    image: cultural
  },
  {
    id: 4,
    event: "Science Fair",
    description: "Showcasing innovative science projects by students.",
    image: science
  }
];

const Events = () => {
  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prevEvent) => (prevEvent + 1) % eventsList.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="events-container">
      <div className="event-card">
        <img
          src={eventsList[currentEvent].image}
          alt={eventsList[currentEvent].event}
          className="event-image"
        />
        <div className="event-details">
          <h3 className="event-name">{eventsList[currentEvent].event}</h3>
          <p className="event-description">{eventsList[currentEvent].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Events;