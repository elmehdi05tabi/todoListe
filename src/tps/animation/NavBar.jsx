import { div, nav } from 'framer-motion/client'
import React from 'react'
import Logo from './logo';
import { useScroll,motion } from 'framer-motion'
 function NavBar() {
    const {scrollYProgress} = useScroll() ;
    console.log(scrollYProgress) ; 
  return (
    <nav className='navbar navbar-expand-lg bg-light fixed-top'>   
    <div className='container'>
        <motion.div 
    style={{
        scale:scrollYProgress,
        height :'5px',
        background:'darkgoldenrod',
        position:'fixed',
        top:0,
        left:0,
        right:0,
        transformOrigin : 0
    }}
    ></motion.div>
        <div className="logo">
            <Logo/>
        </div>
        <ul className='navbar-nav me-auto d-flex mb-2 mb-lg-0 flex-row gap-5'>
            <li className='nav-item'>
                <a href="#" className='nav-link text-secondary'>Luffy</a>
            </li>
            <li className='nav-item'>
                <a href="#" className='nav-link text-secondary'>Our Team</a>
            </li>
            <li className='nav-item'>
                <a href="#" className='nav-link text-secondary'>About Us</a>
            </li>
        </ul>
    </div>
    </nav>
  )
}
export default NavBar  