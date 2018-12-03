import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: [
        "Pucks",
        "Sticks",
        "Bags",
        "Skates",
        "Laces",
        "Cones"
      ]
    }
  }
  render(){
    let { list } = this.state
    let listHockey = list.map((item, i) => {
      return <h2 key={i}>{item}</h2>
    })
    return(
      <div className="App">
          {listHockey}
      </div>
    )
  }
}

export default App