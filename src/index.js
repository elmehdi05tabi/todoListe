import React from 'react';
import ReactDOM from 'react-dom/client';
import UsersApp from './tps/Users/UsersApp.jsx';
import App from './tps/todoList/App.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
const FruitArray= [
  'framboise',
  'citrone',
  'pomme',
  'orange'
] 
root.render(
  <React.StrictMode>
    <div className='container '>
    <App/>
    </div>
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
