import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: []
    }
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/planets").then(response => {
      console.log(11111, response.data.results);
      this.setState({
        list: [...this.state.list, response.data.results]
      })

    }).catch(err => {console.log(`Error! Did not retrieve planet! ${err}`)})
  }

  render() {
    let { list } = this.state;
    let display = list.map((obj, i) => {
      return (
        <div key={i}>
        <h1>{obj.name}</h1>
        <h2>{obj.rotation_period}</h2>
        <h3>{obj.diameter}</h3>
        </div>
      )
    })
    return (
      <div className="App">
          {display}
          {console.log(222222, this.state.list)}
      </div>
    );
  }
}

export default App;
