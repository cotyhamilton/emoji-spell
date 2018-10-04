import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
    constructor() {
        super();
        this.winSound = new Audio('./yay.mp3');
        this.loseSound = new Audio('./uh-oh.wav');
    }

    componentDidMount() {
        if (this.props.win === true) {
            this.winSound.play();
        }
        else {
            this.loseSound.play();
        }
    }

    render() {
        return (
            <div className="modal">
                {this.props.win === true
                    ?
                        <h1 onClick={this.props.close}><i className="em-svg em-tada wiggle"></i></h1>
                    :
                        <h1 onClick={this.props.close}><i className="em-svg em-flushed wiggle"></i></h1>}
            </div>   
        )
    }
}

export default Modal;