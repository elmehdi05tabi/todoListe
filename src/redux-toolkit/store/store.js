import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../feautures/counterSlice" ; 
const store = configureStore({
    reducer : counterSlice
})
export default store ; 