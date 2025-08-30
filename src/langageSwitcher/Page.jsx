import { useState } from "react";
import LangageSwitcher from "./LangageSwitcher" ; 
export default function Page(){
    const [currentLange,setCurrentLang] = useState('AR') ;
    const handelLanegChange = ()=>{
        switch (currentLange) {
            case 'AR' :
                return 'السلام عليكم' 
            case 'FR' : 
               return "bonjour" 
            case 'EN' : 
               return 'Hello'
            case 'ES' : 
               return 'Holla'
        }
    }
    return (<>
        <LangageSwitcher onLangeChange={(value)=>setCurrentLang(value)}/>
            <hr />
     <div className="ms-2 text-danger"> Current Langage:{currentLange}</div> 
            <hr />
        <div className="alert alert-success" role="alert">
          <p className="mb-0">{handelLanegChange()}</p>
        </div>
    </>)
} 