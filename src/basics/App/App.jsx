import {createContext,useState} from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom' ; 
import Home from './Home';
import About from './About' ;
import Contact from './Contact';
export const themContexte = createContext() ;
export default function App() {
    const [isDarkMod,setIsDarkMod] = useState(false) ; 
    const handelClick = ()=>{
        setIsDarkMod(prevState=>!prevState) ; 
    }
    const style = ()=>{
        if(isDarkMod) {
            return {
                background : 'black',
                color : 'white'
            }
        }
        return {
            background : 'white',
                color : 'black' 
        }
    }
    const styleUl = {
        display : 'flex' ,
        justifyContent : 'center', 
        gap : 50 ,
        listStyle : 'none' 
    }
    //
  return (
    <themContexte.Provider value={{isDarkMod,style}}>

    <div className='container text-center h-100' style={style()}>
        <button className='btn btn-outline-dark' onClick={handelClick}>DarkMod</button>
    <BrowserRouter>
    <ul style={styleUl}>
        <li>
            <Link to='/'>Homme</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/contact'>Contact</Link>
        </li>
    </ul>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    <a href="./useContext.jsx">useConc</a>
    </div>
    </themContexte.Provider>
  )
}
