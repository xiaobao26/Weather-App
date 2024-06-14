import React from 'react'
import './grid.css';
import CurrentCity from './Component/CurrentCity';

const WeatherCard = () => {
    return (
        <div className='weathercard-container'>
            <div className='grid-container'>
            <div className='grid-item grid-cur-city'>
                <CurrentCity />
            </div>
            
            <div className='grid-item '>2</div>
            <div className='grid-item '>3</div>
        </div>
        </div>
        
    )
}

export default WeatherCard