import { Component } from "react";
import HelloWorld from "../helloWorld/helloWorld"
export default class Toggle extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            displayName : true 
        }
    }
    toggleName = ()=>{
        this.setState(
            prevState=>{
                return {displayName: !prevState.displayName }
            })}
    
    render(){
        return (
        <div>
            
            <button onClick={this.toggleName}>{this.state.displayName.toString()}</button>
            {this.state.displayName===true ? <HelloWorld firstName={"elmehdi"}/> : undefined }
        </div>
        )
    }
}