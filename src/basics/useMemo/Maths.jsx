import { useCallback, useMemo, useRef, useState } from "react";
const expenseveValue = (value) =>{
  for (let i =0;i<1000; ++i) {
    value ++ ;
  }
  return value ; 
}
export default function Maths() {
  const [n,setN] = useState(0) ; 
  const text = useRef() ; 
  let  startDate = performance.now() ; 
  let enDate = null
  const  handelClick = () =>{
    return  setN(parseInt(text.current.value)) ; 
  }
  const calculate = useMemo( () => {
    const value = expenseveValue(n) ; 
    enDate = performance.now()
    console.log(`le Temps est : ${enDate - startDate} ms`) ; 
    return value  ; 
  },[]) ; 
  return (
    <div>
      <input defaultValue={0} type="text"  id="text" ref={text}/>
      <button className="btn btn-danger" onClick={handelClick}>Calculator</button>
      <h1>Value : {calculate}</h1> 
    </div>
  )
}
