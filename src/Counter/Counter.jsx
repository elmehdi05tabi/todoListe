// ! class Compenent
/*import {Component} from 'react' ; 
export default class Counter extends Component {
    constructor (props){
        console.log("hi from constructor") ;
        super(props) ;
        this.state = {
            counter:0,
            age : 20
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
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextState,this.state)
        if(nextState.age != this.state.age) {
            return false ; 
        }
        return true ; 
    }
    // ! componentDidMount 
    componentDidMount() {
        // fetch api
        console.log("component mounted") ; 
    }
    getSnapshotBeforeUpdate(nextProps,nextState) {
        const scrolle = {
            x:window.scrollX,
            y : window.scrollY
        }
        return scrolle ;
    }
    // ~ componentDidUpdate 
    componentDidUpdate(prevProps,prevState,snapShot){
        window.scroll(snapShot.x+50,snapShot.y+50); 
        console.log(snapShot) ; 
    }
    // & componetWillUnmount 
    componentWillUnmount() {
        
    }
    render () {
        console.log("hi from render function") ; 
        return (<div>
            <button onClick={this.handelIncrement}>+1</button>
            <button onClick={this.handelDecrement.bind(this)}>-1</button>
            il y a {this.state.counter} Seconde
        </div>)
    }
} 
*/
// ~ function Component 
import { useState,useEffect } from "react";
export default function Counter({valDefault,step}){
    // useState
    // useEffect
    const [count,setCount] = useState(valDefault) ; 
    const [time,setTime]  =useState(new Date() ) ; 
    let timer = null
    useEffect(()=>{
        setTime(()=> new Date()) ; 
        console.log("component mounted")
        setInterval(()=>{
            setTime(new Date) ; 
            console.log("ticke") ;
        },1000)

        return ()=>{
            clearInterval(timer) ;
        }
    },[])
    useEffect(()=>{
        console.log("count changed"); 
    },[count])  ; 
    useEffect(()=>{
        console.log("age changed")  ;
    },[]) ; 
    return (
        <>
            Date:<span>{time.toLocaleString()}</span>
        <button onClick={()=>{
            setCount(prevState=>{
                return prevState+step
            })
        }}>incerment</button>
        <button onClick={()=>{
            setCount(0)
            
        }}>Reset!!!</button>
         il y a {count} secondes 
        </>
    )
}