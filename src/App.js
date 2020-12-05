import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar"
import Dashboard from "./Components/Dashboard"
import Card from "./Components/Card"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "game": "Please select a game",
      "story": "Please select a story",
      "productivity": "Please select a productivity app",
      "social": "Please select a social app",
      "studyskills": "Please select a study-skills app"
    };
  }

  makeChoice = (type, choice) => {
    this.setState(state => {
      state[type] = choice
      return state
    })
  }

  render() {
    return (
        <div className="App">
            <Navbar />
            <Dashboard game={this.state.game} social={this.state.social} story={this.state.story} productivity={this.state.productivity} studyskills={this.state.studyskills}/>
                <div className="card-container">
                    <Card type="game" title="flappy bird" makeChoice={this.makeChoice} />
                    <Card type="story" title="Zelda" makeChoice={this.makeChoice} /> 
                    <Card type="productivity" title="remainders" makeChoice={this.makeChoice} />
                    <Card type="studyskills" title="note taking" makeChoice={this.makeChoice} />
                    <Card type="social" title="facebook" makeChoice={this.makeChoice} />
                </div>
        </div>
    );
  }
}

export default App;
