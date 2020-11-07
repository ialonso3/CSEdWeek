import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar"
import Dashboard from "./Components/Dashboard"
import Card from "./Components/Card"

class App extends React.Component {
  render() {
    return (
        <div className="App">
            <Navbar />
            <Dashboard />
            <div className="card-container">
                <Card activity="Games"/>
                <Card activity="Story"/>
                <Card activity="Productivity"/>
                <Card activity="Social"/>
                <Card activity="Study Skills"/>
            </div>
        </div>
    );
  }
}

export default App;
