import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      hockey: [
        "Pucks",
        "Sticks",
        "Skates",
        "Jerseys",
        "Bags",
        "Helmets"
      ],
      input: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e){
    this.setState({
      input: e.target.value
    })
  }


  render() {
    let {hockey, input} = this.state
    let displayHockey = hockey.filter((item) => {
      return item.includes(input)
    }).map((item, i) => {
      return <h2 key={i}>{item}</h2>
    })
    return (
      <div className="App">
          <input type="text" value={input} onChange={this.handleChange} />
          {displayHockey}
      </div>
    )
  }
}

export default App;