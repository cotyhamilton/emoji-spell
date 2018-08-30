import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
    render() {
        return (
            <div className="modal">
                {this.props.win === true
                    ?
                        <div className="modal-content">
                            <h1 className="status">
                                <span role="img" aria-label="tada">🎉</span>
                                    YOU WIN
                                <span role="img" aria-label="tada">🎉</span>
                            </h1>
                            <h3 className="restart" onClick={this.props.close}>new</h3>
                        </div>
                    :
                        <div className="modal-content">
                            <h1 className="status">
                                <span role="img" aria-label="flushed">😳</span>
                                    UH OH
                                <span role="img" aria-label="sweat">😓</span>
                            </h1>
                            <h3 className="restart" onClick={this.props.close}>try again</h3>
                        </div>}
            </div>   
        )
    }
}

export default Modal;