import React,{Component} from "react"


class Header extends Component{
    constructor(props){
        super()
        this.state={
            newTodoName:""
        }
    }


    render(){
        return <div className="header">
                    <div className="title">My Todo List</div>
                    <div className="task-input">
                    <input value={this.state.newTodoName} onChange={(e)=>{this.setState({newTodoName:e.target.value})}} type="text" placeholder="Add a new task" />
                    <button onClick={()=>this.props.addTodo(this.state.newTodoName)}>Add</button>
                    </div>
                </div>
    }
}


export default Header