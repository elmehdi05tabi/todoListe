import { Component } from "react";
export default class Event extends Component {
    handelClick = ()=> {
        console.log(this) ; 
        alert("Bonjour El Mehdi") ; 
    }
    render() {
        return(
            <>
            <button  role={'btn'} onClick={this.props.handelClick}>clique Ici</button>
            </>
        )
    }
}


// export default function () {
//     const handlClick = () => alert("ça va") ;
//     return <>
//     <button onClick={handlClick}>hhh</button>
//     </>
      
//     }
