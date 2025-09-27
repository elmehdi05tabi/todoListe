import React, { useState } from 'react'
import WithCounter from './WithCounter'
function CounterClick({title,incerment,count}) {
  return (
    <div>
        <h1 className='text-primary text-center'>{title}</h1>
        <div className="d-flex justify-content-center text-center">
            <button data-testid={'increment'} className='btn btn-primary w-25' onClick={incerment}>Increment</button>
            <span data-testid='count'className='bg-primary text-light' style={{width:'50px'}}>=={count}</span>
        </div>
    </div>
  )
}
export default WithCounter(CounterClick) ; 
