import { useCallback } from "react";

export default function Maths() {
    let a = 12 ; 
    let b = 13 ; 
    const handelClick = useCallback(() =>{
        let result  = a + b  ; 
        return alert(result) ; 
    },[]) ;
  return (
    <div>
    <button className='btn btn-primary' onClick={handelClick}>Calculator</button>
    </div>
  )
}
