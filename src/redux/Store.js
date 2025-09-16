import CounterReducer from './CounterReducer' ; 
import {createStore} from 'redux' ;
const store = createStore(CounterReducer) ; 
export default store ; 