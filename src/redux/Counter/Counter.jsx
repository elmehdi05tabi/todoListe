import React from 'react'
import store from '../store'
import { type } from '@testing-library/user-event/dist/type'
import { connect, useDispatch, useSelector } from 'react-redux';
import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_RESET } from '../Reducers/CounterReducer';
import { CounterSelectors } from '../store/CounterSelectors';
import { counterDecrement, counterIncrement, counterReset } from '../store/CounterActions';
export default function Counter({selector,onIncrement,onDecrement,onReset}) {
    const selector = useSelector(CounterSelectors) 
    const dispatch = useDispatch() 
    const increment = ()=>   dispatch(counterIncrement()) ; 
    const decrement = ()=>   dispatch(counterDecrement()) ; 
    const reset     = (value)=>   dispatch(counterReset(0))    ;
  return (
    <div className='text-center'>
        <span className=''>{selector}</span>
        <div className="form-group">
        <button className='btn btn-primary' onClick={onIncrement} >+1</button>
        <button className='btn btn-danger'  onClick={onDecrement}>-1</button>
        <button className='btn btn-success'  onClick={onReset}>reset</button>
        </div>
    </div>
  )
}
export function CounterStore() {
    return <div className='text-center'>
        <span className=''>{selector}</span>
        <div className="form-group">
        <button className='btn btn-primary' onClick={increment} >+1</button>
        <button className='btn btn-danger'  onClick={decrement}>-1</button>
        <button className='btn btn-success'  onClick={reset}>reset</button>
        </div>
    </div>
}