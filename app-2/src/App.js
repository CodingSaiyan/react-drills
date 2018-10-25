import React, { Component } from 'react';
import "./App.css";

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      hockey: [
        "Sticks",
        "Pucks",
        "Gloves",
        "Helmets",
        "Cones",
        "Skates"
      ]
    }
  }
  render() {
    let { hockey } = this.state;

    let newHockey = hockey.map((stuff, i) => {
      return <h2 key={i}>{stuff}</h2>
    })

    return (
      <div className="App">
        {newHockey}
      </div>
    )
  }
}