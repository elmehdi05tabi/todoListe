import React, { useRef, useState } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function TodoAdd() {
    const [tasks, setTasks] = useState([]);
    const [taskCom, setTaskComp] = useState([]);
    const taskRef = useRef();
    
    const handelSubmit = (e) => {
        e.preventDefault(); 
        let taskValue = taskRef.current.value;
        
        if (taskValue.trim() === '') {
            return alert('✍️ Ajouter une nouvelle tâche...');
        } else {
            setTasks(prevState => [...prevState, { task: taskValue }]); 
            taskRef.current.value = '';
        }
    }
    // Delete task
    const deletTask = (key) => {
        setTasks(prevState => prevState.filter((_, i) => i !== key)); 
        setTaskComp(prevState => prevState.filter(index => index !== key));
    }
    
    const tacheCompete = (key) => {
        if (taskCom.includes(key)) {
            setTaskComp(prevState => prevState.filter(index => index !== key));
        } else {
            setTaskComp(prevState => [...prevState, key]);
        }
    }
    // Styling for completed tasks
    const style = (key) => {
        if (taskCom.includes(key)) {
            return { color: 'gray', textDecoration: 'line-through',fontStyle:'italicnpm '};
        } else {
            return { color: 'black' };
        }
    }
    
    // Button styling
    const styleBtn = {
        border: 'none',
        background: 'none',
        fontSize: '20px',
        cursor: 'pointer' 
    }
    
    // Display tasks
    const displayTask = () => {
        return tasks.map((task, key) => {
            return (
                <div key={key} className='task'>
                    <button 
                        style={styleBtn} 
                        onClick={() => tacheCompete(key)}
                    >
                        {taskCom.includes(key) ? '✅' : <i className="fa-regular fa-square"></i>}
                    </button>
                    <span style={style(key)}>{task.task}</span>
                    <button 
                        style={styleBtn} 
                        onClick={() => deletTask(key)}
                    >
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            );
        });
    }
    
    return (
        <div className='add-tasks'>
            <form onSubmit={handelSubmit}>
                <input 
                    type="text" 
                    name='task' 
                    id='task' 
                    placeholder='✍️ Ajouter une nouvelle tâche...' 
                    ref={taskRef}
                />
                <input type="submit" value={'Ajouter'} />
            </form>
            <div className="tasks">
                {tasks.length > 0 ? (
                    <div className='task-scrole'>{displayTask()}</div>
                ) : (
                    <p>Aucune tâche ajoutée… Commencez en créant votre première !</p>
                )}
            </div>
        </div>
    );
}