import React, { useState } from 'react'
import Header from "../components/Header"
import Body from "../components/Body"


const TodosPage = ()=>{
    const [todos, setTodos] = useState([
        {
            id:1,
            name:"Buy groceries for next week",
            completed:false
        },
        {
            id:2,
            name:"Renew car insurance",
            completed:false
        },
        {
            id:3,
            name:"Sign up for online course",
            completed:true
        }
    ])

    const onCompleted=(id)=>{
        var newList = todos.map((item)=>{
            if(item.id===id) {
                return {...item,completed:!item.completed}
            }else{
                return item
            }
        })

        setTodos(newList)
    }

    const onAdd=(name)=>{
        var newList = todos
        newList.push({
            id:newList.length+1,
            name:name,
            completed:false
        })

        setTodos(newList)
    }

    const onDelete=(id)=>{
        var newList = todos.filter(item=>item.id!==id)
        setTodos(newList)
    }

    const onModify=(id, newName)=>{
        var newList = todos.map((item)=>{
            if(item.id===id) {
                return {...item,name:newName}
            }else{
                return item
            }
        })

        setTodos(newList)
    }

    return (
        <div>
            <Header
                addTodo={onAdd}
            />
            <Body 
                markAsCompleted={onCompleted} 
                todos={todos} 
                deleteTodo={onDelete}
                modifyTodo={onModify}
            />
        </div>
    )


}

export default TodosPage
