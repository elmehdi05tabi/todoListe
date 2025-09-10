import React, { useRef, useState } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function TodoAdd() {
    const [tasks,setTasks] = useState([]) ; 
    const [taskCom,setTaskComp] =useState([]) ; 
    const taskRef  = useRef() ; 
    const handelSubmit = (e)=>{
        let taskValue = taskRef.current.value ; 
        if(taskValue.trim()==='') {
            return alert('✍️ Ajouter une nouvelle tâche...') ; 
        }else {
            e.preventDefault() ; 
            setTasks(prveState=>[...prveState,{task:taskValue}]) ; 
            taskRef.current.value = '' ; 
        }
    }
    // !suprimer tache 
    const deletTask = (key)=>{
        setTasks(prveState=>prveState.filter((_,i)=>i!==key)) ; 
    }
    //* tache Complete 
    const tacheCompete = (key)=>{
        setTaskComp(prveState=>[...prveState,key]) ; 
        console.log(taskCom)
    }
    const style = (key)=>{
        if(taskCom.includes(key)) {
           return { color : 'gray',textDecoration:'line-through'}
        }else {return {color:'black'}}
    }
    // style btn 
    const styleBtn = {
        border : 'none',
        background : 'none',
        fontSize : '20px'
    }
    // afficher les tache 
    const displayTask = ()=>{
        return tasks.map((task,key)=>{
            return <div key={key} className='task'>
                <button style={styleBtn} onClick={()=>tacheCompete(key)}>{taskCom.includes(key)?'✅':<i className="fa-regular fa-square"></i>}</button>  {/* carré vide */}
                <span style={style(key)}>{task.task}</span>
                <button style={styleBtn}onClick={()=>deletTask(key)}><i className="fa-solid fa-trash"></i></button>
            </div>
        })
    }
  return (
    <div className='add-tasks'>
        <form onSubmit={handelSubmit}>
            <input type="text" name='task' id='task' placeholder='✍️ Ajouter une nouvelle tâche...'ref={taskRef}/>
            <input type="submit" value={'Ajouter'} />
        </form>
        <div className="tasks">
        {tasks.length > 0 ? <div className='task-scrole'>{displayTask()}</div> : 
        <p>Aucune tâche ajoutée… Commencez en créant votre première !</p>
        }
        </div>
    </div>
  )
}
