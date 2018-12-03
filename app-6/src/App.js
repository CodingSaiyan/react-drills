import React, { Component } from 'react';
import './App.css';
import Todo from './Todo/Todo';

class App extends Component {
  constructor() {
    super()

    this.state= {
      todos: [],
      input: ""
    }
  }

  handleChange(val) {
    this.setState({
      input: val
    })
  }

  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo],
      input: ""
    })
  }

  render() {
    let { input, todos } = this.state;
    return (
      <div className="App">
        <input type="text" value={input} onChange={(e) => {this.handleChange(e.target.value)}} />
        <button onClick={() => {this.addTodo(input)}}>Add a todo</button>
        <Todo list={todos} />
      </div>
    )
  }
}

export default App;