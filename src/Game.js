import React, { Component } from 'react';
import Alphabet from './Alphabet.js';
import './Game.css';

class Game extends Component {
    render() {
        return (
            <div className="game">
                <h1 className="back-button">
                    <i onClick={this.props.restart} class="em-svg em-point_left"></i>
                </h1>
                <h1>{this.props.goal}</h1>
                <Alphabet update={this.props.updateProgress} />
                <h1 className="progress">{this.props.progress}{' _'.repeat(this.props.goal.length - this.props.progress.length)}</h1>
                <h3 onClick={this.props.clear} className="restart-button">clear</h3>
            </div>
        );
    }
}

export default Game;