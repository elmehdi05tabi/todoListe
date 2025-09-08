import { useContext } from 'react';
import image from './car.jpg' ; 
import {AppContext} from './App' ;
import HelloWorld from '../helloWorld/helloWorld';
export default function Card({title,body}) {
  const context  = useContext(AppContext)
  return ( 
    <>
    {/* <AppContext.Consumer> */}
      {/* {isDarkMod=>( */}
        <div className="card row col-4" style={(context.isDarkMode)?{color:"white",background:'black'}:{}}>
          <img src={image}  className='card-img-top 'alt=""/>
        <div className="card-body ">
        <div className="card-title">
          <h1>{title}</h1>
        </div>
        <div className="card-body">
          <p>{body}</p>
          <HelloWorld firstName="elmehdi"/>
        </div>
        </div>
    </div>
    {/* )} */}
    {/* </AppContext.Consumer> */}
    </>
  )
}