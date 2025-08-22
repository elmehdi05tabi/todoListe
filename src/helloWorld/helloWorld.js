// export default function HelloWorld(props) {
//     console.log(props) ; 
//     const age = 15 ; 
//     return (<h1>hello {props.firstName} {age>=18?'adulte':"mineur"}</h1>) ; 
// }
import React from "react";
 export default class HelloWorld extends React.Component {
     age = 20 ; 
     render() {
        console.log(this) ; 
        return (<h1>hello {this.props.firstName} {this.age>= 18 ? "adulte" : "minuere" }</h1>) ; 
    }
}