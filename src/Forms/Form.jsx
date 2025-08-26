import { Component, useState } from "react"
export default function Form() {
    const [formValue,setFormValue] = useState({
        id: undefined,
        name:undefined,
        age :undefined,
        city:undefined,
        contries :undefined
    })
    const inputNameChange = (e)=>{
        const currentTarget = e.currentTarget ; 
        const id = currentTarget.id 
        let  value = currentTarget.value ;
        console.log(currentTarget.type) ; 
        if(currentTarget.type=="checkbox") {
            value = currentTarget.checked ; 
        }
        setFormValue(
            prevState=> {
                return {...prevState,...{[id]:value}}
            }
        ) ; 
        console.log(formValue) ;
    }
        return (
        <>
    <div className="container my-3">
    <form>
        {JSON.stringify(formValue)}
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" id="name" onChange={inputNameChange}/>
        </div>
        <div className="form-group">
            <label>Age</label>
            <input type="text"  id="age" className="form-control" onChange={inputNameChange}/>
        </div>
        <div className="form-group">
            <label>City</label>
            <input type="text"  id="city" className="form-control" onChange={inputNameChange}/>
        </div>
        <div className="form-group">
            <input type="checkbox" id="accept" className="form-check-input" onChange={inputNameChange}/>
            <label className="form-check-label" htmlFor="accept">Accept our reuls</label>
        </div>
        <select name="" id="countries" className="form-select" onChange={inputNameChange}>
            <option value="ma">maroc</option>
            <option value="al">algérie</option>
            <option value="fr">france</option>
        </select>
        <div className="form-gorup">
            <input type="submit" value="save" className="btn btn-primary" />
        </div>
    </form>
    </div>
    </>
    )} ; 

// ! avec classe composant 
     /*export default class Form  extends Component{
    constructor (state) {
        super(state) ; 
        this.state = {
            inputName : '',
            inputAge : '',
            inputAcceptCondition : false
        }
    }
        inputNameChange = ()=>{
        let inputName = document.querySelector("#name").value
        this.state.inputName = inputName ; 
        console.log(this.state.inputName) ;
    }
    inputAgeChange = ()=>{
        let inputAge = document.querySelector("#age").value
        this.state.inputAge = inputAge ; 
        console.log(this.state.inputAge) ; 
    }
    inputAcceptConditionChange = ()=> {
        let acceptCondition = document.querySelector("#accept").checked ; 
        this.state.inputAcceptCondition = acceptCondition  ; 
        console.log(this.state.inputAcceptCondition) ;
    } 

    render () {*/ 