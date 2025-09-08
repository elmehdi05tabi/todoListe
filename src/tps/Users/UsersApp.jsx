import React, { createContext, use, useState } from 'react'
import UsersTable from './UsersTable'
import UsersAdd from './UsersAdd';
import UsersLayoute from './UsersLayoute';
 export const usersContext =  createContext({
      users : [] ,
      lastId :0,
      addUser : ()=> null,
      updateUser :()=> null
    })
export default function UsersApp() {
    const [users,setUsers] = useState([]); 
    const [lastId,setLastId] =useState(0) ; 
    const addUser = (data)=>{
       alert('ok')  
       setUsers(prevState=>[...prevState,data.payload] ) 
       setLastId(prevState => prevState+1) ; 
    }
    const updateUser = (data)=>{
      const {id,...rest} = data
     setUsers(prevState=> prevState.map(user=>{
        if(user.id===id){
          return {id:user.id,...rest} 
        }
        return user 
      })
     )} ; 
  return (
    <>
    <usersContext.Provider value={{users:users,lastId:lastId,addUser:addUser,updateUser:updateUser}}>
    <UsersLayoute/>
    </usersContext.Provider>
    </>
  )
}
