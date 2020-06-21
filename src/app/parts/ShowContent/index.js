import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faTint, faThermometerHalf, faTemperatureLow, faCompass } from '@fortawesome/free-solid-svg-icons'

import './index.css'

import {convertTimestamp} from '../../utils/utils'
import DivNextDays from '../../components/DivNextDays'

const ShowContent = (props) => {
    
    let data = {}
    let arrayForecast = [];

    if(Object.keys(props.allData).length > 0) {
        const city = props.allData

        data = {
            name: city.name,
            country: city.sys.country,
            date: city.dt,
            description: city.weather[0].description,
            icon: city.weather[0].icon,
            temperature: city.main.temp.toFixed(0),
            temperature_max: city.main.temp_max.toFixed(0),
            temperature_min: city.main.temp_min.toFixed(0),
            humidity: city.main.humidity,
            pressure: city.main.pressure,
            sunrise: city.sys.sunrise,
            sunset: city.sys.sunset,
            latitude: city.coord.lat,
            longitude: city.coord.lon,
            speed: city.wind.speed
        }

        let dateFormated = convertTimestamp(data.date)
        data.date = dateFormated

        arrayForecast = props.forecastData  
    } 

    return (
        <>
            <section className="wrapper">
                <div className="current-data">
                    <div className="about-city-main">

                        <div>
                            <h2>{data.name}, <span>{data.country}</span></h2>
                            
                            <p>{data.date}</p>
                        </div>

                        <div>
                            
                            <img 
                                src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="" 
                            /> 

                            <h2>
                                <FontAwesomeIcon icon={faThermometerHalf}
                                title='temperatura atual'/>
                                {data.temperature}°C
                            </h2>
                            <p>{data.description}</p>
                        </div>

                    </div>
                    
                    <div className="about-city-secondary">
                    
                        <div>
                            <p>
                                <FontAwesomeIcon icon={faThermometerHalf}
                                title='temperatura máxima'/>
                                 {data.temperature_max}°C
                            </p>    
                            <p>
                                <FontAwesomeIcon icon={faThermometerHalf}
                                title='temperatura mínima'/>
                                {data.temperature_min}°C
                            </p>
                        </div>

                        <div>
                            <p>
                                <FontAwesomeIcon icon={faTint}
                                title='humidade'/>
                                {data.humidity}%
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faWind}
                                title='velocidade do vento'/> 
                                {data.speed}Km/h
                            </p>
                        </div>

                        <div>
                            <p>
                                <FontAwesomeIcon icon={faCompass} title='latitude'/> 
                                {data.latitude}
                            </p>

                            <p>
                                <FontAwesomeIcon icon={faCompass}
                                title='longitude'/> 
                                {data.longitude}
                            </p>
                        </div>
                    </div>
                </div>

                <h3>Previsão para próximos dias:</h3>
                <div className="next-days">
                    
                    {arrayForecast.map(forecast => {
                        return <DivNextDays 
                            key={forecast.dt} 
                            day={forecast.dt_txt} 
                            icon={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                            temp_max={forecast.main.temp_max.toFixed(0)} 
                            description={forecast.weather[0].description} 
                            />
                    })}
                </div>
            </section>
        </>
    )
}

export default ShowContent