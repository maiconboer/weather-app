import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons'

import './DivNextDays.css'

const DivNextDays = (props) => {
  
  return (
    <>
      <div className="forecast"> 
        <p>{props.day}</p>
        <img src={props.icon} alt=""/>
        <p><FontAwesomeIcon icon={faThermometerHalf}/>{props.temp_max}°C</p>
        <p>{props.description}</p>        
      </div>
    </>
  )
}

export default DivNextDays