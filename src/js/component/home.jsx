import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState('red');

  useEffect(() => {
    const cycleLights = () => {
      if (activeLight === 'red') {
        setTimeout(() => setActiveLight('yellow'), 3000); 
      } else if (activeLight === 'yellow') {
        setTimeout(() => setActiveLight('green'), 1500);
      } else if (activeLight === 'green') {
        setTimeout(() => setActiveLight('red'), 3000); 
      }
    };

    cycleLights();
  }, [activeLight]);

  return (
    <div className="traffic-light">
      <div className={`light red ${activeLight === 'red' ? 'active' : ''}`}></div>
      <div className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}></div>
      <div className={`light green ${activeLight === 'green' ? 'active' : ''}`}></div>
    </div>
  );
};

export default TrafficLight;
