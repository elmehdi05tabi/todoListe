import React from 'react';
import ReactDOM from 'react-dom/client';
import UsersApp from './tps/users/UsersApp';
// import Counter, { CounterStore } from './redux/Counter/Counter.jsx';
// import App from './tps/todoList/App.jsx';
import App from './redux/App.jsx';
import {Provider} from 'react-redux' ; 
import store from './redux/Store.js' ; 
const root = ReactDOM.createRoot(document.getElementById('root'));
const FruitArray= [
  'framboise',
  'citrone',
  'pomme',
  'orange'
] 
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App/>
    </Provider>
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
