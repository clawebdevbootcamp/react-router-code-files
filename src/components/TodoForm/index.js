import React, { useState } from 'react'

const TodoForm = (props)=>{
    const [todoName, setTodoName] = useState(props.selectedTodo.name)
    return <div>
                <input className="task-input" value={todoName} onChange={(e)=>{setTodoName(e.target.value)}} type="text"/>
                <button onClick={()=>{props.modifyTodo(props.selectedTodo.id,todoName)}}> Modify</button>
            </div>
}

export default TodoForm
