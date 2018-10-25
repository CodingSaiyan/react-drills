import React, {Component} from 'react';
import "./App.css";
import NewTask from './Components/NewTasks';
import List from './Components/List';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      list: []
    }

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(task) {
    let { list } = this.state;
    this.setState({ list: [...list, task ]})
  }

  render() {
    return (
      <div className="App">
        <h1>My More Complex Set Up For My Todo List</h1>
        <NewTask add={ this.handleAddTodo} />
        <List tasks={ this.state.list} />
      </div>
    )
  }
}