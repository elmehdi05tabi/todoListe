import Card from "./Cadr";
import { createContext, useState } from "react";
export const AppContext = createContext({})  ;
export default function App() {
    const [isDarkMode,setIsDarkMod] = useState(false) ; 
    const handelChange = ()=>{
        setIsDarkMod(preveState => !preveState) ; 
        console.log(isDarkMode) ; 
    } 
    const style = ()=>{
        if(isDarkMode){
            return {
                color:'white',
                background : 'black'
            }
        }
        return {
                color:'black',
                background : 'white'
            }
    }
  return (
    <>
    <AppContext.Provider value={{isDarkMode}}>
    <div className="m-0 p-0" style={{color:style().color,background:style().background}}>
        <div className=" d-flex justify-content-end my-3">
      <button className={`btn my-2 ${(isDarkMode)?"btn-outline-light":"btn-outline-dark"}`} 
      onClick={handelChange}>
        {(isDarkMode)?"Light Mode":"Dark Mode"}
        </button>
        </div>
      <hr />
      <div className="row gap-3">
        <Card title="sport" body='elmehdi tb'/>
        <Card title="sport" body='elmehdi tb'/>
        <Card title="sport" body='elmehdi tb'/>
        <Card title="sport" body='elmehdi tb'/>
        <Card title="sport" body='elmehdi tb'/>
        <Card title="sport" body='elmehdi tb'/>
      </div>
    </div>
    </AppContext.Provider>
    </>
  )
}