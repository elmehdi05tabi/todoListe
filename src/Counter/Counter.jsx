// ! class Compenent
// import {Component} from 'react' ; 
/*export default class Counter extends Component {
    constructor (props){
        super(props) ;
        this.state = {
            counter:0,
        } ; 

    }
    handelIncrement = ()=>{
        this.setState(
            prevState=>{
                return {counter:prevState.counter+1} ; 
            }
        )
    }
    handelDecrement(){
        this.setState(
            prevState=>{
                return {counter:prevState.counter-1}
            }
        )
    }
    // componentDidMount() {
    //     setInterval(()=>{
    //         this.setState(
    //             prevState=>{
    //                 return {counter: prevState.counter +1} ; 
    //             } 
    //         )
    //     },1000) ; 
    // }
    render () {
        return (<div>
            <button onClick={this.handelIncrement}>+1</button>
            <button onClick={this.handelDecrement.bind(this)}>-1</button>
            il y a {this.state.counter} Seconde
        </div>)
    }
} */

// ~ function Component 
import { useState } from "react";
export default function Counter({valDefault,step}){
    const [state,setState] = useState(valDefault) ; 
    return (
        <>
        <button onClick={()=>{
            setState(prevState=>{
                return prevState+step
            })
            }}>incerment</button>
        <button onClick={()=>{
            setState(0)
            
            }}>Reset!!!</button>
         il y a {state} secondes 
        </>
    )
}