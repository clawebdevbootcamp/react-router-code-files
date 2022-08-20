import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor(props){
        super(props)
        this.state={
            todoName:props.selectedTodo.name
        }
    }
    render() {
        return (
            <div>
                <input className="task-input" value={this.state.todoName} onChange={(e)=>{this.setState({todoName:e.target.value})}} type="text"/>
                <button onClick={()=>{this.props.modifyTodo(this.props.selectedTodo.id,this.state.todoName)}}> Modify</button>
            </div>
        )
    }
}
