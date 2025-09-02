import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorld from './helloWorld/helloWorld.js';
import reportWebVitals from './reportWebVitals';
import TextFildes from "./Forms/TextFildes.js" ;
import Form from "./Forms/Form.jsx" ;
import Counter from "./Counter/Counter" ;
import Fruit from "./Fruit/Fruit"  ; 
import Event from './Events/Events' ; 
import FruitList from './FruitList/FruitList';
import Toggle from './Toggle/Toggle';
import ProductListe from './tps/store/ProductListe';
import Page from './langageSwitcher/Page';
import FormValidationBegginers from './tps/formvalidation/FormValidationBegginer.jsx';
import FormValidation from './FormValidation/FormValidation.jsx';
// import App from './Router/App.jsx';
import App from './Context/App.jsx'; 
import CarsListe from './Cars/CarsListe.jsx';
import Car from './Cars/CarsListe.jsx';
import Maths from './useMemo/Maths.jsx';
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
    {/* <Form /> */}
    {/* <Page/> */}
    {/* <App/> */}
    {/* <CarsListe/> */}
    {/* <FormValidation></FormValidation> */}
    {/* <Maths></Maths> */}
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
