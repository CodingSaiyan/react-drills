import React, { Component } from 'react';
import "./App.css";
import Image from './Components/Image';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Image 
        imageSrc = {"https://github.com/DevMountain/react-drills/raw/assets/5.png"}
        />
      </div>
    )
  }
}