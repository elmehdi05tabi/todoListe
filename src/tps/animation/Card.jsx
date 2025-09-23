import React from 'react'
import { motion } from 'framer-motion'
 function Card({title,children,image}) {
  return (
    <>
        <motion.div 
        initial={{
            y : "100vh"
        }}
        animate={{
            y:0
        }}
        transition={{
            duration : 1
        }}
        className='m-3 p-3 text-white  bg-dark overflow-hiden'>
            <div className="d-felx align-items-center h-100">
                    <motion.h2
                     initial={{
                     x : "100vw"
                    }}
                    animate ={{
                        color:'darkgoldenrod',
                        x : 0
                    }}
                      transition={{
                        duration : 1
                    }}
                    >
                    {title}
                    </motion.h2>
                <div className="my-3 py-3 d-flex">
                <p>{children}</p>
                <motion.img 
                whileTap={{
                    y : -10
                }}
                src={image} width={200}/>
                </div>
            </div>
        </motion.div>
    </>
  )
}
export default Card 