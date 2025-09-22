import {useState} from 'react'
export default function WithCounter(OrinalCompenent) {
    const newCompenent  = (props)=>{
    const [count,setCount] = useState(0) ; 
    const incerment = ()=>{
        setCount(prevState => prevState+1) ; 
    }
    return <>
       <OrinalCompenent count={count} {...props}  incerment={incerment}/>
    </>
    }
  return (
    newCompenent 
  )
}
