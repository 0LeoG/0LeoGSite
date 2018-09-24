import React, { Component } from "react";
import logo from "./logo.svg";
import "./Styles/App.css";
import NavBar from "./Modules/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />

          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       
      </div>
    );
  }
}

export default App;
