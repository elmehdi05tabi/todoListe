// export default function Fruit({fruits}) {
//     const Display = _=>  fruits.map((fruit)=><li>{fruit}</li>)

//     return (
//         <>
//         <h1>Fruit</h1>
//         <ul>
//             {Display()}
//         </ul>
//         </>
//     )
// }

import React from "react" ; 
 export default class Fruit extends React.Component {
    DisplayArray = _=> this.props.fruits.map((fruit)=><li>{fruit}</li>) ; 
    render() {
        return (
                   <>
        <h1 className="h1">Fruit</h1>
        <ul>
            {this.DisplayArray()}
        </ul>
        </> 
        ) 
    }
}