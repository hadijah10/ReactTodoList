import React from 'react'
import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList';
import EditForm from './EditForm';
import { useEffect } from 'react';

function Todo() {
    const [tasks,setTasks] = useState(JSON.parse(localStorage.getItem("todos")) || []);
    const addTodo = (item)=> {
       setTasks([...tasks,item])
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((data) => data.id !==id))
    }
    
    const updateTask =(id,value) => {
      //const newitem =  tasks.map((data) => data.id === edata.id? {...data,...edata}:data);
     // const edititem = 
    //  setTasks(prev => [...prev,edititem]);e
    setTasks(prev => prev.map(element => element.id == id? value:element));
    }
    const pinTask=(id)=> {
      const newt = tasks.map((data) => data.id == id ? {...data,pinned:!data.pinned}:data)
     // setTasks(prev=> prev.map((data) => data.id == id ? {...data,pinned:!data.pinned}:data))
      const pinnedtasks = newt.filter(data => data.pinned == true)
      const unpinned = newt.filter(data => data.pinned !=true)
      setTasks([...pinnedtasks,...unpinned])
    }
   useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(tasks))
   },[tasks])
  return (
    <div><TodoForm addTodo={addTodo}/>
     <TodoList tasks = {tasks} deleteTask={deleteTask} updateTask= {updateTask} pinTask={pinTask}/>
    </div>
    
  )
}

export default Todo