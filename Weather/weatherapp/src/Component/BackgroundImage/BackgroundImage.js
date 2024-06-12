import React from 'react'
import backgroundImage from './background.png'; // Import the image

const BackgroundImage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-500 to-violet-500" >
      <img 
        src={backgroundImage}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0
        }} 
        alt='cloud image in the bottom-right' />
    </div>
  )
}

export default BackgroundImage