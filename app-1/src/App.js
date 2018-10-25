import React, { Component } from 'react';
import "./App.css";

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      message: ""
    }
  }

  handleChange(val) {
    this.setState({ message: val})
  }

  render() {
    let { message } = this.state;
    return (
      <div className="App">
        <input type="text" onChange={(e) => this.handleChange(e.target.value)}></input>
        <h2>{message}</h2>
      </div>
    )
  }
}