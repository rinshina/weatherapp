import React, { useRef } from 'react'
import "./style.css"
import Icon from '@mdi/react';
import { mdiWhiteBalanceSunny } from '@mdi/js';


function DateCard() {
    const datePicker=useRef(null);
    const handleDatePicker=()=>{
        
        datePicker.current.showPicker?.();
        datePicker.current.click()
    }
  return (
        <div className='date-card-container'> 
        
        <h4 className='heading-date' onClick={handleDatePicker}>Today</h4>
        <input type="date" className="d-none" ref={datePicker} name="" id="" />
        <h2 className='celesius'>
        <Icon path={mdiWhiteBalanceSunny}
            size={2}
            horizontal
            vertical
            rotate={90}/>32</h2>
        <h4 className='climate'> Sunny</h4>
        <p className='location'>California</p>
        <p className='location'>12-10-2000</p>
        <p className='location'>feels like sunny | sunset 18:30</p>
    </div>
  )
}

export default DateCard