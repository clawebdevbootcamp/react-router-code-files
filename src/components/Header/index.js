import React, {useState} from "react"


const Header = (props)=> {

    const [newTodoName, setNewTodoName] = useState("")

    return <div className="header">
                <div className="title">My Todo List</div>
                <div className="task-input">
                <input value={newTodoName} onChange={(e)=>{setNewTodoName(e.target.value)}} type="text" placeholder="Add a new task" />
                <button onClick={()=>props.addTodo(newTodoName)}>Add</button>
                </div>
            </div>
    
}


export default Header