import React, { Component } from 'react'

const Todo =(props)=>{
 
        return (
           <div key={"todo-"+props.key} className="item">
                    <div><input onChange={()=>props.markAsCompleted(props.id)} checked={props.completed} type="checkbox" /> {props.name}</div>
                    <div className="manage">
                        <button onClick={()=>{props.setSelectedTodo(this)}}>
                        <img src="images/edit.png" width="20px" alt="edit1" />
                        </button>
                        <button onClick={()=>{props.deleteTodo(props.id)}}>
                        <img src="images/delete.png" width="15px" alt="del1" />
                        </button>
                    </div>
          </div>
        )
    
}

export default Todo
