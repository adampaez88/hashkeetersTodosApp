import React, { Component } from 'react';
import TodoList from './components/TodoList'
import './App.css';

class App extends Component{

  state = {
    todos: [
      {title: "First Todo", content: "Some Todo Content"},
      {title: "Second Todo", content: "Some More Todo Content"},
      {title: "Third Todo", content: "Some Less Todo Content"}
    ]
  }

  render(){
    return (
      <div className="App">
        <header>
          <h1>Todo App</h1>
        </header>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
