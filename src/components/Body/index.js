import React, { useState } from 'react'
import Todo from "../Todo"
import TodoForm from "../TodoForm"

const Body = (props)=>{

    const [selectedTodo, setSelectedTodo] = useState(null)

    return   <div className="todos-list">
            {props.todos.map((item,key)=>(
                <Todo 
                    setSelectedTodo={()=>setSelectedTodo(item)}
                    deleteTodo={props.deleteTodo}
                    markAsCompleted={props.markAsCompleted} 
                    id={item.id} 
                    name={item.name} 
                    completed={item.completed} 
                    key={key}
                />
            ))}
            {selectedTodo&&<TodoForm 
                        selectedTodo={selectedTodo}
                        modifyTodo={(id,name)=>{
                            props.modifyTodo(id,name)
                            setSelectedTodo(null)
                        }
                        }
            />}
        </div>

}

export default Body