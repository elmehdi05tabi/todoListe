import {useState,useRef, useEffect} from 'react' ; 
export default function Form () {
    const [formValues,setFormValues] = useState({});
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
        console.log(inputNameRef.current.value);
        setFormValues( {
            name : inputNameRef.current.value,
            date :inputDateRef.current.value,
            city : inputCityRef.current.value,
            contries:inputContriesRef.current.value,
            accept :inputAcceptRef.current.checked
        }
        ) ; 
    } 
    return (
        <>
        {JSON.stringify(formValues)}
        <form className='container my-3'>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' className='form-control' ref={inputNameRef}/>
            </div>
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date" id='date' className='form-control' ref={inputDateRef}/>
            </div>
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id='city' className='form-control' ref={inputCityRef}/>
            </div>
            <div className="form-group">
                <label htmlFor="" className='form-select-label' >Countries</label>
                <select id='contries' className='form-select' ref={inputContriesRef}>
                    <option value="ma">Maroc</option>
                    <option value="al">Algerier</option>
                    <option value="fr">France</option>
                </select>
            </div>
            <div className="form-group">
                <input type="checkbox" id='accept' className='form-check-input'  ref={inputAcceptRef}/>
                <label htmlFor='accept'>Accept Rules</label>
            </div>
            <div className="form-group">
                <input type="submit" value="Save" className='btn btn-primary' onClick={handelChange}/>
            </div>
        </form></>
    )
}
