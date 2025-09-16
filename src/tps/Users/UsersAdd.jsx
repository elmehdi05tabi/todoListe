import React, { useContext } from 'react'
import { UsersContexte } from './UsersApp'
export default function UsersAdd() {
    const context = useContext(UsersContexte) ; 
  return (
    <>
        <form>
            <div className="form-groupe my-3">
                <label htmlFor="id">Id</label>
                <input type="text" name='id' id='id' className='form-control' disabled  value={context.lastId+1}/>
            </div>
            <div className="form-groupe my-3">
                <label htmlFor="id">Full Name</label>
                <input type="text" name='fullName' id='fullName' className='form-control' />
            </div>
            <div className="form-groupe my-3">
                <label htmlFor='country'>Countrys</label>
                <select name="country" id="country" className='form-select'>
                    <option selected>Select Country</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Algéria">Algéria</option>
                    <option value="France">France</option>
                </select>
            </div>
            <div className="form-group d-flex gap-5 justify-content-center ">
                <input type="submit" className='btn btn-outline-primary w-25' value={'Submit'}/>
                <input type="btn" className='btn btn-outline-secondary  w-25' value={'Reset'}/>
            </div>
        </form>
    </>
  )
}
