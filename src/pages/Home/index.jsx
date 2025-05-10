import React from 'react'
import './style.css'
import DateCard from '../../layout/DateCard'
import Summary from '../../layout/Summary'
import WeatherInfo from '../../layout/WeatherInfo'


function Home() {
  return (
    <div className='home-container'>
        <div className='right-content'>
          <DateCard/>
        </div>
        
        <div className='left-content'>
          <WeatherInfo/>
          <Summary/>
          
        </div>
        
    </div>
  )
}

export default Home