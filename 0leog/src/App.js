import React, { Component } from "react";
import "./Styles/App.css";
import NavBar from "./Modules/NavBar";
import HomeCard from "./Modules/HomeCard";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <HomeCard/>

       
      </div>
    );
  }
}

export default App;
