import React, { Component } from "react";
import Workspace from './common/components/Workspace/Workspace';
import Tile from './common/components/Tile/Tile';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">REDUX WORKSPACE</header>
        <Workspace>
          <Tile />
        </Workspace>
      </div>
    );
  }
}

export default App;
