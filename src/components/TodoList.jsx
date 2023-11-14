import React, { useState } from 'react';
import {AiTwotoneDelete} from 'react-icons/ai';
import {AiTwotoneEdit} from 'react-icons/ai';
import {BsFillPinFill} from 'react-icons/bs';

import {PropTypes} from 'prop-types';
import EditForm from './EditForm';


function TodoList({tasks,deleteTask,updateTask,pinTask}) {
  const [udata,setudata] = useState({
    id:null,
    value:null
  })
  const editsubmit =(value) => {
    updateTask(udata.id,value)
    setudata({ id:null})
  }
  if (udata.id){
    return <EditForm  data={udata.value} editForm={editsubmit}/>
  }

  return (
   <>
   
  {tasks.map((task,index) => 
     <div key = {index} style={{display:'flex',justifyContent:'space-between', alignItems:'center',maxWidth:'13em'}}>
      {task.pinned && <BsFillPinFill/>}
      <h4>{task.data}</h4>
      <p>{task.memo}</p>
     <div>
     <AiTwotoneDelete onClick={() => deleteTask(task.id)}/>
      <AiTwotoneEdit onClick={() => setudata({id:task.id,value:task})}/>
      <BsFillPinFill onClick={() => pinTask(task.id)}/>
       </div>
      </div>
        )
  }
   </>
  )
}

TodoList.propTypes ={
    tasks: PropTypes.array.isRequired,
    deleteTask: PropTypes.func,
    updateTask:PropTypes.func
}

export default TodoList;