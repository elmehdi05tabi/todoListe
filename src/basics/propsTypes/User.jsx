import React from 'react'
import PropTypes from "prop-types";
 function User({fullName,jobTittle,age,isAdulte,certification,salary}){
  return (
    <>
    <div className="container">
        <div className="card">
            <div className="card-body">
                {isAdulte&& <span className="badge badge-pill badge-primary">Adulte</span>}
                <span className="badge badge-pill badge-primary">{jobTittle}({salary}Mad)</span>
                <div className="card-title">{fullName} ({age})</div>
                <ul className="nav justify-content-center">
                      {certification?.map(certificat=>{
                    <li className="nav-item">
                        <a className="nav-link active" href="#">{certificat}</a>
                    </li>
                })}  
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}
User.propTypes = {
    fullName : PropTypes.string.isRequired,
    jobTittle : PropTypes.string.isRequired,
    isAdulte : PropTypes.bool.isRequired,
    certification : PropTypes.arrayOf(PropTypes.string),
    salary : PropTypes.number.isRequired,
    age : (props,propsName,componentName)=>{
        console.log(props); 
    }
} 
export default User   ; 