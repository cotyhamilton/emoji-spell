import React, { Component } from 'react';
import Modal from './Modal.js';
import Game from './Game.js';
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
              <button onClick={() => this.startGame('cat')} className="word-card">
                <span role="img" aria-label="cat">🐈</span>
              </button>
              <button onClick={() => this.startGame('dog')} className="word-card">
                <span role="img" aria-label="dog">🐕</span>
              </button>
              <button onClick={() => this.startGame('car')} className="word-card">
                <span role="img" aria-label="car">🚗</span>
              </button>
              <button onClick={() => this.startGame('octopus')} className="word-card">
                <span role="img" aria-label="octopus">🐙</span>
              </button>
              <button onClick={() => this.startGame('alien')} className="word-card">
                <span role="img" aria-label="alien">👽</span>
              </button>
              <button onClick={() => this.startGame('robot')} className="word-card">
                <span role="img" aria-label="robot">🤖</span>
              </button>
              <button onClick={() => this.startGame('ghost')} className="word-card">
                <span role="img" aria-label="ghost">👻</span>
              </button>
              <button onClick={() => this.startGame('baby')} className="word-card">
                <span role="img" aria-label="baby">👶</span>
              </button>
              <button onClick={() => this.startGame('shirt')} className="word-card">
                <span role="img" aria-label="shirt">👕</span>
              </button>
              <button onClick={() => this.startGame('glasses')} className="word-card">
                <span role="img" aria-label="glasses">👓</span>
              </button>
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