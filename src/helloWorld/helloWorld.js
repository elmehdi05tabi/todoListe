// export default function HelloWorld(props) {
//     console.log(props) ; 
//     const age = 15 ; 
//     return (<h1>hello {props.firstName} {age>=18?'adulte':"mineur"}</h1>) ; 
// }
import React from "react";
import { AppContext } from "../Context/App";
 export default class HelloWorld extends React.Component {
     age = 20 ; 
     clikcBody = ()=>{
            alert("body id clicked") ; 
        } ;
     componentDidMount() {
        console.log("component mounted") ;
        // document.addEventListener("click",this.clikcBody)
    }
    componentDidUpdate() {
        console.log("component updating")
    }
    componentWillUnmount() {
        console.log("component IS DEAD ") ; 
       document.removeEventListener("click",this.clikcBody) ; 
    }
     render() {
        console.log(this) ; 
        return (
            <>
            <AppContext.Consumer>
                {context=>(
                    <h4 style={(context.isDarkMod)?{color:"white",}:{color:'red'}}>hello {this.props.firstName} {this.age>= 18 ? "adulte" : "minuere" }</h4> 
                )}
            </AppContext.Consumer>
            </>
        ) ; 
    }
}