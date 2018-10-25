import React, {Component} from 'react';
import "./App.css";
import Todo from './Components/Todo';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      todos: [],
      userInput: ""
    }
  }

  handleChange(val) {
    this.setState({ userInput: val})
  }

  addTodo() {
    let { todos, userInput } = this.state;

    this.setState({
      todos: [...todos, userInput],
      userInput: ""
    })

  }

  render() {
    let List = this.state.todos.map((item, i) => {
      return <Todo key={i} todo={item} />
    })
    return (
      <div className="App">
      <h1>MY Todo List App</h1>
      <div>
          <input type="text" value={this.state.userInput} onChange={(e) => this.handleChange(e.target.value)}></input>
          <button onClick={() => this.addTodo(this.state.userInput)}>Add a new todo</button>
 
      </div>
<br />

{ List }
</div>
    )
  }
}