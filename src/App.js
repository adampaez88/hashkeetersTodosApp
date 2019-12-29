import React, { Component } from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css';

class App extends Component{

  state = {
    todos: [
      {title: "First Todo", content: "Some Todo Content"},
      {title: "Second Todo", content: "More Todo Content"},
      {title: "Third Todo", content: "Some More Todo Content"}
    ]
  }

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo] 
    })
  }
 
  render(){
    return (
      <div className="App">
        <header>
          <h1>Todo App</h1>
        </header>
        {this.state.todos.length < 4 ? <TodoForm addTodo={this.addTodo}/> : null}
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;