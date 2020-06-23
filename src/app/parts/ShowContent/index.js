import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faTint, faThermometerHalf, faCompass } from '@fortawesome/free-solid-svg-icons'

import './index.css'

import DivNextDays from '../../components/DivNextDays'
import {convertTimestamp} from '../../utils/utils'

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

  let icons = [faThermometerHalf, faThermometerHalf, faTint, faWind, faCompass, faCompass]               
  let titles = ['temperatura máxima', 'temperatura mínima', 'humidade', 'velocidade do vento', 'latitude', 'longitude']
  let informations = [data.temperature, data.temperature_min, data.humidity, data.speed, data.latitude, data.longitude]
  let symbols = ['°C ↑', '°C ↓', '%', '~', '', '']

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
                  src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="" /> 
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
                {informations.map((infomation, index) => {
                  return (
                    <p key={titles[index]}>
                    <FontAwesomeIcon icon={icons[index]}
                    title={titles[index]}/>
                    {informations[index]}{symbols[index]}
                    </p>    
                  )
                })}
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