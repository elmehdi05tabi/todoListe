import {  useRef, useState } from "react"
export default function FormValidationBegginers() {
    const inputNameRef             = useRef() ; 
    const inputEmailRef            = useRef() ; 
    const inputMessageRef          = useRef() ; 
    const inputCountryRef          = useRef() ; 
    const inputAcceptConditionRef  = useRef() ; 
    const [errurs,setErreurs] = useState([]) ; 
    let isValidate = true ;
    const validateForm = ()=>{
       const NameValue  =  inputNameRef.current.value   ;           
       const EmailValue  =  inputEmailRef.current.value  ;           
       const MessageValue  =  inputMessageRef.current.value   ;        
       const CountryValue  =  inputCountryRef.current.value  ;         
       const AcceptConditionValue  =  inputAcceptConditionRef.current.checked   ;
    // !   Validate Name
    setErreurs([]) ;
       if(NameValue.trim()==='') {
        setErreurs(prevState=>{
            return ([...prevState,'Name Required'])
        })
        isValidate = false
       } 
    //    & validate email
       if(EmailValue.trim()==='') {
        setErreurs(prevState=>{
            return ([...prevState,'Email Not Correct'])
        })
        isValidate = false
       } else if (!EmailValue.match(/^\S+@\S+.\S+$/)) {
           setErreurs(prevState=>{
            return ([...prevState,'Email Not Correct'])
        })
        isValidate = false
       }
    //    Validate Message
       if(MessageValue.trim()==='') {
        setErreurs(prevState=>{
            return ([...prevState,'Message Required'])
        })
        isValidate = false
       } 
    //    ? Validate Country
       if(CountryValue.trim()==='') {
        setErreurs(prevState=>{
            return ([...prevState,'Country Required'])
        })
        isValidate = false
       } 
    //    * Validate Condition 
       if(AcceptConditionValue===false) {
        setErreurs(prevState=>{
            return ([...prevState,'Accept Condition Is Required'])
        })
        isValidate = false
       } 
       return isValidate 
    }
    const handelSubmit = (e) =>{
        validateForm(); 
        if(isValidate===false) {
            e.preventDefault();
        }
    }
    return (
        <div className="container my-3">
                        {errurs.length>0 ? 
                        <div className="alert alert-danger" role="alert">
                <strong>Error</strong>
                <ul>
                        {errurs.map((errurs,key)=>{
                             return <li key={key}>{errurs}</li>
                            })}
                            </ul>
                            </div>
                       : ''
                    }
           
         <form onSubmit={handelSubmit}>
            <h1>Contact form</h1>
            <hr/>
            {/*<-- Name input -->*/}
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="name" >Name</label>
                <input type="text" id="name" ref={inputNameRef} className="form-control" />
            </div>

            {/*<-- Email input -->*/}
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="email">Email address</label>
                <input type="text" id="email" ref={inputEmailRef} className="form-control" />
            </div>

            {/*<-- Message input -->*/}
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea className="form-control" ref={inputMessageRef} id="message" rows="4" ></textarea>
            </div>

            {/*<-- Country select -->*/}
            <div className="form-group mb-4">
                <label>Country</label>
                <label htmlFor="country"></label>
                <select className="form-control"  ref={inputCountryRef} id="country">
                    <option value=''>Select country</option>
                    <option value='MA'>Maroc</option>
                    <option value='DZ'>Algérie</option>
                    <option value='TN'>Tunisie</option>
                </select>
            </div>

            {/*<-- Checkbox -->*/}
            <div className="form-check mb-4">
                <div className="d-flex">
                    <input className="form-check-input me-2"  ref={inputAcceptConditionRef} type="checkbox" id="acceptAllConditions" />
                    <label className="form-check-label"  htmlFor="acceptAllConditions">
                        Accept all conditions
                    </label>
                </div>
            </div>

            {/*<-- Submit -->*/}
            <button type="submit" className="btn btn-primary w-100 mb-4">Submit</button>
        </form>
    </div>
)}