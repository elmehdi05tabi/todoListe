import React from 'react' 
import styles from './blogs.module.scss' 
import { COLORS } from '../../Config/Dessign-system/Colors.js'
export default function Blogs() {
    // const bgColor = {
    //     background : 'red',
    //     width : '300' ,
    //     margin : 'auto'
    // }
    const h2Style = {
        color : COLORS.primary ,
    }
  return (
    <>
    <div className={` my-3 ${styles.container}`}>Hello From Blogs Page</div>
    <h2 style={h2Style}>El Mehdi Tabi</h2>
    </>
  )
}
