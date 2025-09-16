import { createContext, useContext, useState } from 'react';
import UsersTable from './UsersTable' ;  
import UsersLayoute from './UsersLayoute';
export const  UsersContexte = createContext({
    users : [] ,
    lastId : 0 
}
)
export default function UsersApp() {
    const [users,setUser] = useState([ 
        {id:1,fullName:'elmehdi tabi',country:'morocco'},
        {id:2,fullName:'mohamde hassan',country:'algérie'}
    ]) ; 
    const [lastId,setLastId] = useState(users.length) 
  return (
    <UsersContexte.Provider value={{users:users,lastId:lastId}}>
    <div className='container my-3'>
    <UsersLayoute/>
    </div>
    </UsersContexte.Provider>
  )
}
