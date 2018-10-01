import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
    render() {
        return (
            <div className="modal">
                {this.props.win === true
                    ?
                        <div className="modal-content">
                            <h1><i className="em-svg em-tada wiggle"></i></h1>
                            <div className="modal-text">
                                <h3 className="restart" onClick={this.props.close}>NEW</h3>
                            </div>
                        </div>
                    :
                        <div className="modal-content">
                            <h1><i className="em-svg em-flushed wiggle"></i></h1>
                            <div className="modal-text">
                                <h3 className="restart" onClick={this.props.close}>TRY AGAIN</h3>
                            </div>
                        </div>}
            </div>   
        )
    }
}

export default Modal;