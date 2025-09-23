import  {useState, useToggle} from 'react' ; 
import { motion } from 'framer-motion';
export default function App() {
  const [open,setOpne] = useState(true)  ; 
  const divStyle = {
    background : '#ccc' ,
    width : '150px',
    height : '100px',
    borderRaduis : '10px'
  }
  const handelShow = () =>{
    setOpne(prevState=>!prevState) ; 
  }
  const boxVariants  = {
    visible : {x:0,opacity:1,rotate:0},
    hidden : {x:100,opacity:0,rotate:45}
  }
  return (
    <div className='container my-4 vstack gap-2'>
        <div className="vstack gap-2">
            <motion.div 
            whileHover={{translateY:-2}}
            variants={boxVariants}
            animate={ open ? 'visible' :'hidden' }
  
            className="box d-flex justify-content-center align-items-center" 
            style={divStyle}>1</motion.div>
        </div>
        <div>
        <button className='btn btn-primary' onClick={handelShow}>affiche/maque</button>
        </div>
    </div>
  )
}
