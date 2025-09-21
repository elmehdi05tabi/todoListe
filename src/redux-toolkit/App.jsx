import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement,ancremntByAnmount} from './feautures/counterSlice'
export default function App() {
    const count = useSelector(state=>state.value) ; 
    const dispatch = useDispatch()
  return (
    <div className='container text-center my-5'>
        <div class="alert alert-primary" role="alert">
            <strong>{count}</strong>
        </div>
        <button className='btn btn-outline-primary ' onClick={()=>dispatch(increment())}>+1</button>
        <button className='btn btn-outline-danger ms-5  ' onClick={()=>dispatch(decrement())}>-1</button>
        <button className='btn btn-outline-secondary ms-5 ' onClick={()=>dispatch(ancremntByAnmount(5))}>+5</button>
    </div> 
  )
}

