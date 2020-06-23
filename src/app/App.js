import React, { useState } from 'react';
import './App.css';

import { getDataCity, getForecastNextDays } from './services/api'

import Header from './parts/Header'
import ShowContent from './parts/ShowContent'
import Welcome from './parts/Welcome'
import NotFound from './parts/NotFound'

const App = () => {

  const [found, setFound] = useState(0)
  const [allData, setAllData] = useState([])
  const [forecastData, setForecastData] = useState([])

  async function handleSearchCity(e) {
    let value = e.target.value
    if (e.key === 'Enter') {    
        
      let arrayForecast = []

      let response = await getDataCity(value)
      let responseForecast = await getForecastNextDays(value)   
        
      if (response.name) {
        setFound(1)
        setAllData(response);

        // dados de 5 dias
        arrayForecast.push(responseForecast.list[2], 
                          responseForecast.list[10], 
                          responseForecast.list[18], 
                          responseForecast.list[26], 
                          responseForecast.list[34])

        setForecastData(arrayForecast)        
      } else {
          setFound(2);
      }
    }
  }

  return (
    <>
      <Header />
      <div className="inputCity">
        <input
          type="text"
          name="city"
          onKeyPress={(e) => handleSearchCity(e)}
          placeholder='Cidade...'
        />
      </div>

      { found === 0
      ? (<Welcome />)
      : null }

      { found === 1 
      ? (<ShowContent allData={allData} forecastData={forecastData}/>)
      : null }  

      { found === 2
      ? (<NotFound />)
      : null }
    </>   
  )
}
export default App;
