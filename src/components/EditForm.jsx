import React from 'react'
import { useState } from 'react'
import TodoForm from './TodoForm';
import {v4} from "uuid";

function EditForm({data,editForm}) {
    const [edittask,seteditTask] = useState('');
    
    const handlesubmit = (e)=>{
        e.preventDefault
        editForm({
         ...data,data:edittask
        })

        seteditTask("")
    }

  return (
    <>
      <form action="" onSubmit={handlesubmit}>
        <input type="text" placeholder="Edit item" valaue={edittask} onChange={e => seteditTask(e.target.value)} required/>
        <button onClick={handlesubmit}>Edit</button>
        </form>

    </>
  )
}

export default EditForm