import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from './framer_motion/App.jsx';
import Animation from './tps/animation/Animation.jsx';
import { motion } from 'framer-motion';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Animation/>
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
