import React, { Component } from 'react';
import Alphabet from '../Alphabet';
import './Game.css';

class Game extends Component {
    clear = () => {
        this.props.boom();
        this.props.clear();
    }

    render() {
        return (
            <div className="game">
                <h1 className="back-button">
                    <i onClick={this.props.restart} className="em-svg em-point_left"></i>
                </h1>
                <p className="emoji"><i className={'spin em-svg em-' + this.props.emoji}></i></p>
                <h1 className="goal">{this.props.goal}</h1>
                <Alphabet update={this.props.updateProgress} goal={this.props.goal}/>
                <h1 className="progress">{this.props.progress}{' _'.repeat(this.props.goal.length - this.props.progress.length)}</h1>
                <h1 onClick={this.clear} className="restart-button">
                    <i className={'em-svg em-bomb'} id='bomb'></i>
                </h1>
            </div>
        );
    }
}

export default Game;