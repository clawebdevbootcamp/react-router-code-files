import React, { Component } from 'react'
import Header from "../components/Header"
import Body from "../components/Body"

export default class HomePage extends Component {
    constructor(){
        super()
        this.state={
            todos:[
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
            ]
        }

        this.onCompleted=this.onCompleted.bind(this)
        this.onAdd=this.onAdd.bind(this)
        this.onDelete=this.onDelete.bind(this)
        this.onModify=this.onModify.bind(this)
    }

    onCompleted(id){
        console.log("completing ...",id)
        var newList = this.state.todos.map((item)=>{
            if(item.id===id) {
                return {...item,completed:!item.completed}
            }else{
                return item
            }
        })

        console.log(newList)

        this.setState({todos:newList})
    }

    onAdd(name){
        var newList = this.state.todos
        newList.push({
            id:newList.length+1,
            name:name,
            completed:false
        })

        this.setState({todos:newList})
    }

    onDelete(id){
        var newList = this.state.todos.filter(item=>item.id!==id)
        this.setState({todos:newList})
    }

    onModify(id, newName){
        var newList = this.state.todos.map((item)=>{
            if(item.id===id) {
                return {...item,name:newName}
            }else{
                return item
            }
        })

        this.setState({todos:newList})
    }

    render() {
        return (
            <div>
                <Header
                    addTodo={this.onAdd}
                />
                <Body 
                    markAsCompleted={this.onCompleted} 
                    todos={this.state.todos} 
                    deleteTodo={this.onDelete}
                    modifyTodo={this.onModify}
                />
            </div>
        )
    }
}
