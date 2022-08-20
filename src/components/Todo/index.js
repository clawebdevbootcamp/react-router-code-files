import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
           <div key={"todo-"+this.props.key} className="item">
                    <div><input onChange={()=>this.props.markAsCompleted(this.props.id)} checked={this.props.completed} type="checkbox" /> {this.props.name}</div>
                    <div className="manage">
                        <button onClick={()=>{this.props.setSelectedTodo(this)}}>
                        <img src="images/edit.png" width="20px" alt="edit1" />
                        </button>
                        <button onClick={()=>{this.props.deleteTodo(this.props.id)}}>
                        <img src="images/delete.png" width="15px" alt="del1" />
                        </button>
                    </div>
          </div>
        )
    }
}
