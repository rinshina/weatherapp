import React from 'react'
import "./style.css";
import Icon from '@mdi/react';

import { mdiWeatherPartlyCloudy } from '@mdi/js';

function WeatherInfo() {
  const availableWeathers=[{time:'now',degree:'35°C'},{time:'2am',degree:'33°C'},{time:'3am',degree:'35°C'},{time:'4am',degree:'35°C'},{time:'5am',degree:'35°C'}];
  const availableWeathers2=[{time:'6am',degree:'35°C'},{time:'7am',degree:'35°C'},{time:'8am',degree:'28°C'},{time:'9am',degree:'29°C'},{time:'10am',degree:'32°C'}];
  return (
    <div className='weather-info-container'>
      < div className='wrapping-degrees'>
          {availableWeathers.map(details=>{
            return(
              <div>
                <p  className='weather-info-content'>{details.time}</p><p  className='mt-3 weather-info-content icon-weather'><Icon path={mdiWeatherPartlyCloudy}
                            size={1}
                            horizontal
                            vertical
                            rotate={180}/>{details.degree}</p>
              </div>
          );
        })}
        
        
      </div>
      <hr className='hr-divider'></hr>
      < div className='wrapping-degrees'>
          {availableWeathers2.map(details=>{
            return(
              <div>
                <p  className='weather-info-content'>{details.time}</p><p  className='mt-3 weather-info-content icon-weather'><Icon path={mdiWeatherPartlyCloudy}
                            size={1}
                            horizontal
                            vertical
                            rotate={180}/>{details.degree}</p>
              </div>
          );
        })}
        
        
      </div>
    </div>
  )
}

export default WeatherInfo