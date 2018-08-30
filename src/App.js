import React, { Component } from 'react';
import Modal from './Modal.js';
import Game from './Game.js';
import words from './words.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      goal: '',
      progress: ''
    }
  }

  updateProgress = (letter) => {
    this.setState({
      progress: this.state.progress + letter
    });
  }

  clear = () => {
    this.setState({
      progress: ''
    });
  }

  startGame = (word) => {
    this.setState({
      'goal': word
    });
  }

  restart = () => {
    this.setState({
      'goal': '',
      'progress': ''
    });
  }

  render() {
    return (
      <div className="App">
        {!this.state.goal
          ?
            <div className="word-card-container">
              <h1>EMOJI SPELL</h1>
              {Object.keys(words).map(key => 
                <button onClick={() => this.startGame(key)} className="word-card" key={key}>
                  <span role="img" aria-label={words[key]}>{words[key]}</span>
                </button>
              )}
            </div>
          :
            <Game goal={this.state.goal}
                  progress={this.state.progress}
                  updateProgress={this.updateProgress}
                  clear={this.clear}
                  restart={this.restart}/> }

          {this.state.goal && this.state.progress === this.state.goal
            ?
              <Modal win={true} close={this.restart} />
            :
              false}
          
          {this.state.progress.length >= this.state.goal.length && this.state.progress !== this.state.goal
            ?
              <Modal win={false} close={this.clear} />
            : 
              false}
      </div>
    );
  }
}

export default App;