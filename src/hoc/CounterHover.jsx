import React, { useState } from 'react'
import WithCounter from './WithCounter';
function CounterHover({incerment,count,title,color}) {
  return (
    <div>
        <h1 className='text-primary text-center'>{title}</h1>
        <div className="d-flex justify-content-center text-center">
            <button className={`btn btn-primary w-25 ${color}`} onMouseOver={incerment}>Increment</button>
            <span className='bg-primary text-light' style={{width:'50px'}}>=={count}</span>
        </div>
    </div>
  )
}
export default WithCounter(CounterHover)  ; 
