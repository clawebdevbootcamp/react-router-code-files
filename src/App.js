import React, {Component} from 'react'
import HomePage from "./pages/HomePage"
import "./App.css"

class App extends Component{

  render(){
    return <div>
      <div className="todos-container">
        <HomePage/>
      </div>
    </div>
    
  }

}


export default App;
