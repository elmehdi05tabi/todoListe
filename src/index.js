import React from 'react';
import ReactDOM from 'react-dom/client';
// import HelloWorld from './helloWorld/helloWorld.js';
// import reportWebVitals from './reportWebVitals';
// import TextFildes from "./Forms/TextFildes.js" ;
import Form from "./Form/Form" ;
import Counter from "./Counter/Counter" ;
import Fruit from "./Fruit/Fruit"  ; 
import Event from './Events/Events' ; 
import FruitList from './FruitList/FruitList';
import Toggle from './Toggle/Toggle';
import ProductListe from './tps/store/ProductListe';

const root = ReactDOM.createRoot(document.getElementById('root'));
const FruitArray= [
  'framboise',
  'citrone',
  'pomme',
  'orange'
] 
root.render(
  <React.StrictMode>
    {/* <HelloWorld firstName='Elmehdi'/>
    <TextFildes inputName="FirstName" labelName="FirstName">
      Enter Votre Fisrt Name
    </TextFildes>
    <TextFildes inputName="LastName" labelName="LasteName">
      Enter Votre Laste Name 
    </TextFildes> */}
    {/*//! <Fruit fruits={FruitArray}/> */}
    {/* //?<Counter valDefault={5} step={5}/> */}
    {/* //^<Event/> */}
    {/* <Form/> */}
    {/* <FruitList/> */}
    {/* <Toggle/> */}
    {/* <Counter valDefault={2} step={2} /> */}
    <ProductListe></ProductListe>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
