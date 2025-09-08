import React, { useContext } from 'react'
import { usersContext } from './UsersApp'
import { Link } from 'react-router-dom';
export default function UsersTable() {
    const context = useContext(usersContext) ; 
    const displayUsers = ()=>{
       return  context.users.map((user,key) =>{    
            return <tr key={key}>
                <td>{user.id}</td>
                <td>{user.fullName}</td>
                <td>{user.country}</td>
                <td>
                    <Link to={`/user/${user.id}/edit`} className='btn btn-outline-success mx-2'>Edit</Link >
                    <Link to={`/user/${user.id}/delete`} className='btn btn-outline-danger '>Delete</Link >
                </td>
            </tr>
        }) 
    }
  return (
    <>
        <h1>Users</h1>
        <table className="table table-striped table-inverse table-responsive">
            <thead className='thead-inverse'>
                <tr>
                    <th>#id</th>
                    <th>Full Name</th>
                    <th>Country</th>
                    <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                {context.users?.length>0 ? displayUsers() :<tr> <td colSpan={4} align={'center'}>No Items</td></tr> }
            </tbody>
        </table>
    </>
  )
}
