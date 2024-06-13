import React from 'react';
import backgroundImage from './background.png';
import WeatherCard from '../WeatherCard';

const BackgroundImage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-500 to-violet-500" style={{ position: 'relative' }}>
      <img
        src={backgroundImage}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: 1,
          width: 'auto',
          height: 'auto'
        }}
        alt='cloud image in the bottom-right' />

      <WeatherCard /> {/* Render the WeatherCard component */}
    </div>
  )
}

export default BackgroundImage