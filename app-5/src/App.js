import React, { Component } from 'react';
import './App.css';
import Image from './Image/Image';

class App extends Component {
  constructor() {
    super()

    this.state = {
      ImgUrl: "https://github.com/DevMountain/react-drills/raw/assets/5.png"
    }
  }
  render() {
    let { ImgUrl } = this.state
    return (
      <div>
      <Image imgUrl={ImgUrl} />
      </div>
    )
  }
}

export default App