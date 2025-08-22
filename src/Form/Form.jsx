import { useState } from "react"

export default function From(){
    const [name,setName] = useState("") ; 
    const [age,setAge] = useState("") ; 
    const handelNameInputChange = () =>{
        const  name = document.getElementById("name").value ; 
         setName(name) ; 
    }
    const handelAgeInputChange = () =>{
       const age = document.getElementById("age").value ; 
         setAge(age) ; 
    }
    const handelSumit = (e) =>{
        e.preventDefault() ; 
       alert(name+age)
    }
    return (
        <>
        <form>
            <input type="text" id="name" onChange={handelNameInputChange} placeholder="name  "/>
            <input type="number" id="age"  onChange={handelAgeInputChange}placeholder="age" />
            <input type="submit"  onClick={handelSumit} value="sumit"/>
        </form>
        </>
    )
}