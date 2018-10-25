import React, { Component } from 'react';
import "./App.css";

export default class App extends Component {
  constructor() {
    super()

    this.state={
      cars: [
        "toyota",
        "ford",
        "nissan",
        "ferrari",
        "honda",
        "hyundai"

      ],
      userInput: ""
    }
  }

  handleChange(val) {
    this.setState({ userInput: val })
  }



  render() {
    let { cars, userInput } = this.state

    let newCars = cars.filter((car, i) => {
      return car.includes(userInput);
    }).map((car, i) => {
      return <h2 key={i}>{car}</h2>
    })

    return (
      <div className="App">
          <input type="text" onChange={(e) => this.handleChange(e.target.value)}></input>
          {newCars}
      </div>
    )
  }
}