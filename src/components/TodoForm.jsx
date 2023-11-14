import React from 'react'
import { useState } from 'react'
import {v4} from 'uuid';
import { PropTypes } from 'prop-types';

function TodoForm({addTodo}) {
    const [task,setTask] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({
            id:v4(),
            data:task,
        })
     setTask('')
    }
  return (
    <div>
        <form action="" method='POST' onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter your task' value={task} onChange={e => setTask(e.target.value)} required/>
            <button >Add Task</button>
        </form>
    </div>
  )
}

TodoForm.propTypes ={
    addTodo: PropTypes.func.isRequired
    }


export default TodoForm