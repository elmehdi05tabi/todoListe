import React from 'react'
import { useDispatch ,useSelector} from 'react-redux';

export default function App() {
    const count = useSelector((state)=>state.value) ; 
    const dispatch = useDispatch() ; 
    const increment = ()=>dispatch(({type:'increment'})) ; 
    const decrement = ()=>dispatch(({type:'decrement'})); 
    const reset = ()=>dispatch(({type:'reset'})); 
  return (
    <>
    <div class="alert alert-primary" role="alert">
        <strong>{count}</strong>
    </div>
    <button type="button" class="btn btn-outline-primary" onClick={increment}>Increment</button>
    <button type="button" class="btn btn-outline-primary" onClick={decrement}>Decrement</button>
    <button type="button" class="btn btn-outline-primary" onClick={reset}>Reset</button>
    </>
  )
}
