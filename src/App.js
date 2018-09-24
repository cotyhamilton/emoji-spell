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
      progress: '',
      modal: false
    }
  }

  updateProgress = (letter) => {
    this.setState({
      progress: this.state.progress + letter
    });
  }

  clear = () => {
    this.setState({
      progress: '',
      modal: false
    });
  }

  startGame = (word) => {
    this.setState({
      goal: word
    });
  }

  restart = () => {
    this.setState({
      goal: '',
      progress: '',
      modal: false
    });
  }

  showModal = (status) => {
    if (status !== false) {
      setTimeout(() => {
        this.setState({
          modal: status
        });
      }, 250);
    } else {
      this.setState({
        modal: false
      });
    }
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
                  <i class={'em-svg em-' + words[key]}></i>
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
              (this.state.modal !== 'win' ? this.showModal('win') : false)
            :
              false}
          
          {this.state.progress.length >= this.state.goal.length && this.state.progress !== this.state.goal
            ?
              (this.state.modal !== 'lose' ? this.showModal('lose') : false)
            : 
              false}

          {this.state.modal === 'win'
            ?
              <Modal win={true} close={this.restart} />
            :
              false}

          {this.state.modal === 'lose'
            ?
              <Modal win={false} close={this.clear} />
            :
              false}
      </div>
    );
  }
}

export default App;