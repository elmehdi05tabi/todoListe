import React, { useState } from 'react'
import WithCounter from './WithCounter'
function CounterClick({incerment,count}) {
  return (
    <div>
        <h1 className='text-primary text-center'>Click</h1>
        <div className="d-flex justify-content-center text-center">
            <button className='btn btn-primary w-25' onClick={incerment}>Increment</button>
            <span className='bg-primary text-light' style={{width:'50px'}}>=={count}</span>
        </div>
    </div>
  )
}
export default WithCounter(CounterClick) ; 
