import React from 'react'
import TodoAdd from './TodoAdd' ; 
import './style.css'
export default function App() {
  return (
    <div className='container'>
      <div className="title">
        <h1>Tâches du jour</h1>
        <p>Une tâche après l’autre. Voici ma liste pour avancer simplement et efficacement.</p>
      </div>
      <TodoAdd></TodoAdd>
    </div>
  )
}
