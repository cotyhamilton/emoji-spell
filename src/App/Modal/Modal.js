import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
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