// la creation de reduce 
const INITIAL_VALUE = {value:0} ; 
export default function CounterReducer (state=INITIAL_VALUE,action) {
    switch (action.type) {
        case 'increment' : return {value:state.value+1} 
        case 'decrement' : return {value:state.value-1} 
        case 'reset'     : return {value:0} 
        default : return state
    }
}