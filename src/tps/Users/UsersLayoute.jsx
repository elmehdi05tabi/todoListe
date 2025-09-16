import React from 'react'
import { BrowserRouter , Routes ,Route,Link } from 'react-router-dom'
import UsersTable from './UsersTable'
import UsersAdd from './UsersAdd'
export default function UsersLayoute() {
  return (
    <BrowserRouter>
    <ul className="nav justify-content-center gap-3 ">
        <li className="nav-item">
            <Link to={'/'} className='nav-link'>Users Table</Link>
        </li>
        <li className="nav-item">
            <Link to={'/users/create'} className='nav-link'>Add Users</Link>
        </li>
    </ul>
    <Routes>
        <Route index element={<UsersTable></UsersTable>}></Route>
        <Route path='/users/create' element={<UsersAdd></UsersAdd>}></Route>
        <Route></Route>
    </Routes>
    </BrowserRouter>
  )
}
