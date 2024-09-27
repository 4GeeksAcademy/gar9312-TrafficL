import React, { useState } from 'react';

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState('red');

  const handleLightClick = (color) => {
    setActiveLight(color);
  };

  return (
    <div className="traffic-light">
      <div 
        className={`light red ${activeLight === 'red' ? 'active' : ''}`} 
        onClick={() => handleLightClick('red')}
      ></div>
      <div 
        className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`} 
        onClick={() => handleLightClick('yellow')}
      ></div>
      <div 
        className={`light green ${activeLight === 'green' ? 'active' : ''}`} 
        onClick={() => handleLightClick('green')}
      ></div>
    </div>
  );
};

export default TrafficLight;
