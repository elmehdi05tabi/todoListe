import React from 'react'
import image from './images/luffy.png' ; 
import { motion } from 'framer-motion';
 function HerroBaner() {
    const containerVartiant = {
        hidden : {
              y : '-100vh',
              opacity : 0
        },
        visible : {
            opacity : 1,
            y:0,
            transition: {
            duration : 1,
            ease : 'easeInOut'
    }
        }
    }
  return (
    <motion.div 
    variants={containerVartiant}
    initial={'hidden'}
    animate ={'visible'}
    id='luffy' className='position-relative mt-5 
    pt-5 overflow-hidden bg-light d-flex align-items-center text-center'>
        <div className="col-md-7 p-lg-5 mx-auto my-5">
        <motion.h1
        className='display-4 fw-normal'
        initial={{
            opacity:0.5,
        }}
        animate={{
            opacity:1,
            scale:1.1,
            color : 'darkgoldenrod',
            textShadow : '1px 1px 1px black'
        }}
        transition={{
            duration : 1,
            delay : 1
        }}
        > 
             Monkey D. Luffy,
        </motion.h1>
        <motion.p
        animate={{
            scale:1.1,
            fontWeight :'bold'
        }}

        duration={{
            duration : 2
        }}
        >
            Monkey D. Luffy is the captain of the Straw Hat Pirates, and dreamt of being a pirate since
            childhood from the influence of his idol and mentor Red-Haired Shanks. At the age of 17, Luffy
            sets sail from the East Blue Sea to the Grand Line in search of the legendary treasure, One
            Piece, to succeed Gol D. Roger as "King of the Pirates".
        </motion.p>
        <motion.a 
        whileHover={{
            background : 'darkgoldenrod',
            scale : 1.7,
            border :'none'
        }}
        href="#" className='btn btn-primary btn-lg'>
            Comming Son
            </motion.a>
        </div>
        <div className="col-md-5 p-lg-5 mx-auto my-5" >
            <motion.img  drag dragConstraints={{
                x : 200,
              
            }}
            animate={{
                rotate : 360,
                scale : 1.3
            }}
            transition={{
                duration : 2
            }}
            src={image} 
             style={{
                width:'30%'
            }} />
        </div>
    </motion.div>
  )
}
export default HerroBaner 