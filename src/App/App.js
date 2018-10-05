import React, { Component } from 'react';
import Modal from './Modal';
import Game from './Game';
import Cards from './Cards';
import InstallPrompt from './InstallPrompt';
import './App.css';

class App extends Component {
  constructor() {
    super();

    // Detects if device is on iOS 
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test( userAgent );
    }
    // Detects if device is in standalone mode
    const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

    // Checks if should display install popup notification:
    if (isIos() && !isInStandaloneMode()) {
      this.installMessage = true;
    }

    this.letterSound = new Audio('./letter.m4a');
    this.newWordSound = new Audio('./new-word.m4a');
    this.boomSound = new Audio('./boom.mp3');

    this.state = {
      goal: '',
      progress: '',
      modal: false,
      showInstallMessage: this.installMessage
    }
  }

  updateProgress = (letter) => {
    this.letterSound.play();
    this.setState({
      progress: this.state.progress + letter
    });
    if(this.state.progress !== this.state.goal.slice(0,this.state.progress.length)) {
      document.getElementById('bomb').classList.add('wiggle-loop');
    }
  }

  clear = () => {
    this.setState({
      progress: '',
      modal: false
    });
    document.getElementById('bomb').classList.remove('wiggle-loop');
  }

  boom = () => {
    this.boomSound.play();
  }

  startGame = (goal, emoji) => {
    this.newWordSound.play();
    this.setState({
      goal: goal,
      emoji: emoji
    });
  }

  restart = () => {
    this.setState({
      goal: '',
      emoji: '',
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

  closeInstallPrompt =  () => {
    this.setState({
      showInstallMessage: false
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.showInstallMessage ? <InstallPrompt close={this.closeInstallPrompt} /> : null}
        {!this.state.goal
          ?
            <div>
              <Cards startGame={this.startGame} goal={this.state.goal}/>
            </div>
          :
            <Game goal={this.state.goal}
                  emoji={this.state.emoji}
                  progress={this.state.progress}
                  updateProgress={this.updateProgress}
                  clear={this.clear}
                  restart={this.restart}
                  boom={this.boom}/> }

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