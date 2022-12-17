import "../src/styles/App.css";

import React, { Component } from "react";
import Board from "../src/Components/Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">React Trello Clone</div>

        <Board />
      </div>
    );
  }
}

export default App;