import React, { Component } from 'react';
import './App.css';
import GameComponent from "./components/gameComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameComponent/>
      </div>
    );
  }
}

export default App;
