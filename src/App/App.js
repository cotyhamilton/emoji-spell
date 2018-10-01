import React, { Component } from 'react';
import Modal from './Modal';
import Game from './Game';
import Cards from './Cards';
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

  startGame = (goal, emoji) => {
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

  render() {
    return (
      <div className="App">
        {!this.state.goal
          ?
            <div>
              <div><img className="logo" src="/logo.svg" alt="emoji spell logo"/></div>
              <Cards startGame={this.startGame} goal={this.state.goal}/>
            </div>
          :
            <Game goal={this.state.goal}
                  emoji={this.state.emoji}
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