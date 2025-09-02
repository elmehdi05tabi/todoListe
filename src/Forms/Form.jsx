import {useState,useRef, useEffect, useReducer} from 'react' ; 
import { FORM_REDUCER_DEFAULT_VALUES, formReducer } from './FormReducer';
export default function Form () {
    const [formValuesWithReducer,dispatch]  = useReducer(formReducer,FORM_REDUCER_DEFAULT_VALUES) ; 
    //* useRef
    let inputNameRef = useRef() ;  
    let inputDateRef = useRef() ;  
    let inputCityRef = useRef() ;  
    let inputContriesRef = useRef() ;  
    let inputAcceptRef = useRef() ;  
    useEffect( ()=>{
        inputNameRef.current.value = 'elmehdi'
        inputDateRef.current.value = '2005-05-16'
        inputAcceptRef.current.focus() 
    }
    )
    const handelChange = (e)=> {
        e.preventDefault()  ;
        dispatch(
            {
            type:'INPUT_CHANGE',
            payload:inputNameRef.current}
        ) ; 
        dispatch (
            {
                type : 'INPUT_CHANGE',
                payload :inputCityRef.current
            }
        )
        dispatch (
            {
                type : 'SELECT_CHANGE',
                payload :inputContriesRef.current
            }
        )
        dispatch (
            {
                type : 'CHECKBOX_CHANGE',
                payload :inputAcceptRef.current
            }
        )
        console.log(inputNameRef.current.value); 
    } 
    return (
        <>
        {JSON.stringify(formValuesWithReducer)}
        <form className='container my-3'>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name='name' className='form-control' ref={inputNameRef}/>
            </div>
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date" name='date' className='form-control' ref={inputDateRef}/>
            </div>
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" name='city' className='form-control' ref={inputCityRef}/>
            </div>
            <div className="form-group">
                <label htmlFor="" className='form-select-label' >Countries</label>
                <select name='contries' className='form-select' ref={inputContriesRef}>
                    <option value="ma">Maroc</option>
                    <option value="al">Algerier</option>
                    <option value="fr">France</option>
                </select>
            </div>
            <div className="form-group">
                <input type="checkbox" name='accept' className='form-check-input'  ref={inputAcceptRef}/>
                <label htmlFor='accept'>Accept Rules</label>
            </div>
            <div className="form-group">
                <input type="submit" value="Save" className='btn btn-primary' onClick={handelChange}/>
            </div>
        </form></>
    )
}
