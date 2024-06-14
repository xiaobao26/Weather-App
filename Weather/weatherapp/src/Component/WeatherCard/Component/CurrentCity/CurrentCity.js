import React from 'react'
import Cloudy from '../../../../assets/weather_icon/Cloudy.png';
import './Currentcity.css';
import BgCloudy from './Cloudy_day_background.png';
import { ReactComponent as HumidityIcon } from '../../../../assets/meta_icon/humidity.svg'
import { ReactComponent as PM } from '../../../../assets/meta_icon/PM2.5.svg'
import { ReactComponent as Somatosensory_temperature } from '../../../../assets/meta_icon/Somatosensory_temperature.svg'
import { ReactComponent as Wind_speed } from '../../../../assets/meta_icon/wind_speed.svg'


const CurrentCity = () => {
    const backgroundStyle = {
        backgroundImage: `url(${BgCloudy})`,
        backgroundColor: '#689bfd',
    }
    return (
        <>
            <div className='cur-city-container' style={backgroundStyle}>

                <div className='cur-city-date font-color-white'>
                    <h5>
                        23 July, Sunday 12:00
                    </h5>
                </div>

                <div className='cur-city-content-container font-color-white'>
                    <div className='cur-city-content-info'>
                        <div className='cur-city-content-info-place'>
                            <h3 className='font-bold'>
                                Shanghai
                            </h3>

                            <h1 className='font-bold'>
                                23&deg;
                            </h1>
                            <h5>
                                20 ~ 23&deg;
                            </h5>

                            <div className='cur-city-content-info-img'>
                                <img src={Cloudy} alt='cloud image' />
                            </div>
                        </div>
                    </div>

                    <div className='cur-city-content-details-container'>
                        <div className='cur-city-content-details-row'>
                            <HumidityIcon />
                            <Wind_speed />
                            <PM />
                            <Somatosensory_temperature />
                        </div>

                        <div className='cur-city-content-details-row'>
                            <h3>85%</h3>
                            <h3>9km/h</h3>
                            <h3>75&mu;g</h3>
                            <h3>26&deg;</h3>
                        </div>
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default CurrentCity
