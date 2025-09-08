import React from 'react'
import {BrowserRouter,Link,Route,Routes,Outlet} from 'react-router-dom' ; 
import UsersAdd from './UsersAdd';
import UsersTable from './UsersTable';
import UsersEdit from './UsersEdit' ; 
import UsersDelete from './UsersDelete' ; 
export default function UsersLayoute() {
  return(
    <>
    <BrowserRouter>
    <ul className="nav justify-content-center">
        <li className="nav-item">
            <Link to={'/'} className='nav-link'>Users Liste</Link>
        </li>
        <li className="nav-item">
            <Link to={'/user/create'} className='nav-link'>Add Users</Link>
        </li>
    </ul>
    <Routes>
        <Route index element={<UsersTable/>}/>
        <Route path='/user/create' element={<UsersAdd/>}/>
        <Route path='/user/:id/edit' element={<UsersEdit/>}/>
        <Route path='/user/:id/delete' element={<UsersDelete/>}/>
    </Routes>
    </BrowserRouter>
    <Outlet/>
    </>
  )
}
