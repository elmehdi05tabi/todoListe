import React, { useContext } from 'react'
import { UsersContexte } from './UsersApp'
export default function UsersTable() {
    const context = useContext(UsersContexte) ; 
    // afficher les utilisateur 
    const displayUsers = ()=>{
        return context.users.map((user,key)=>{
            return <tr key={key}>
                <td>{user.id}</td>
                <td>{user.fullName}</td>
                <td>{user.country}</td>
            </tr>
        })
    }
  return (
    <> 
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Id</th>
                <th>Full Name</th>
                <th>Country</th>
            </tr>
        </thead>
        <tbody>
            {context.users.length>0 ?displayUsers():<tr><td colSpan={3} align='center'>No items</td></tr> }
        </tbody>
    </table>
    </>
  )
}
