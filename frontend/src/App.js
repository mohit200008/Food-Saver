import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home.js'
import Chatbot from './Components/Chatbot/Chatbot'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chatbot />
        <Home />
      </div>
    );
  }
}
export default App;
