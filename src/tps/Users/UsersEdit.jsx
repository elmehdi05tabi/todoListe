import { useRef,useContext, useEffect, useState, use} from 'react';
import { useParams } from 'react-router-dom';
import { usersContext } from './UsersApp';
import UsersTable from './UsersTable';
export default function UsersEdit() {
    const context = useContext(usersContext) ;
    const fullName = useRef() ; 
    const country = useRef() ; 
    const [currentUser,setCurrentUser] = useState({}) ; 
    const params = useParams() ; 
    useEffect(()=>{
      const {id} = params   ; 
      const user = context.users.filter(user=>user.id === parseInt(id)); 
        if(user.length>0) {
          setCurrentUser(...user) ; 
        }else{
          console.error('User Not Fond') ; 
        } 
        console.log(currentUser) ; 
    },[])
    const handelSubmit =(e)=>{
        e.preventDefault()  ;
        context.updateUser({
            payload: {
            fullName : fullName.current.value,
            country   : country.current.value ,
            id : parseInt(params.id)
            }
        }) ; 
    }
  
  return (
    <>
      <h1>Add user</h1>
            <form onSubmit={handelSubmit}>
                <div className="mb-3 row">
                    <label htmlFor="currentId" className="col-sm-2 col-form-label">Current id</label>
                    <div className="col-sm-10">
                        <input type="text" readOnly className="form-control-plaintext" id="currentId" 
                        defaultValue={currentUser?.id} 
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="fullName" className="col-sm-2 col-form-label">Full Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="fullName" name="fullName"  defaultValue={currentUser?.fullName} ref={fullName} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="country" className="col-sm-2 col-form-label">Country</label>
                    <div className="col-sm-10">
                        <select id='country'name='country' className="form-select" defaultValue={currentUser?.country}  key={currentUser?.country} ref={country} >
                            <option value=''>Select your country</option>
                            <option value="Morocco" selected={currentUser?.country}>Morocco</option>
                            <option value="Algeria" selected={currentUser?.country}>Algeria</option>
                            <option value="Tunisia" selected={currentUser?.country}>Tunisia</option>
                        </select>
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">Update</button>
                </div>
            </form>
        </>
  )
}
