import React, { Component } from 'react';
import Card from './Card';
import words from '../words.js';
import './Cards.css';

class Cards extends Component {

  animate = (word) => {
    document.getElementById(word).classList.add('wiggle');
  }
  
  unAnimate = (word) => {
    if(document.getElementById(word)) {
      document.getElementById(word).classList.remove('wiggle');
    }
  }
  
  componentDidMount() {
    let keys = Object.keys(words).length;
    this.animationInterval = setInterval(() => {
      let word = Object.keys(words)[Math.floor(Math.random()*keys)];
      this.animate(word);
      setTimeout(() => {
        this.unAnimate(word);
      }, 1000);
    }, 2500);
  }
  
  componentWillUnmount() {
    clearInterval(this.animationInterval);
  }

  render() {
    return (
      <div className="cards">
        {Object.keys(words).map(key => 
          <Card onClick={(e) => this.startGame(key,words[key], e)} startGame={this.props.startGame} id={key} key={key} emoji={words[key]}/>
        )}
      </div>
    );
  }
}

export default Cards;
