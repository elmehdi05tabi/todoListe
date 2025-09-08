import { useState } from "react" ; 
export default function FruitList() {
    const [fruit,setFruit] = useState("");
    const [fruitList,setFruitList] = useState([]) ; 
    const DisplayFruit = ()=> fruitList.map((fruit,fruitKey)=> <li key={fruitKey}>{fruit}</li>) ;

    const handelInput = () =>{
        let fruitValue = document.querySelector("#inputFruit").value ; 
        setFruit(fruitValue) ;
    }
    const handellAddFruit = (e)=>{
        e.preventDefault() ;
        setFruitList([...fruitList,fruit]) ; 
    }
    return (
        <>
        <span>
            <form>
                <input type="text" onChange={handelInput}  placeholder="entre fruit" id="inputFruit"/>
                <input type="submit"  onClick={handellAddFruit} value="Add Fruit" />
            </form>
        </span>
        <h1>Fruit List</h1>
        <ul>{DisplayFruit()}</ul>
        </>
    )
} 
