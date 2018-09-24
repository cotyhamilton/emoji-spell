import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
    render() {
        return (
            <div className="modal">
                {this.props.win === true
                    ?
                        <div className="modal-content">
                            <h1><i class="em-svg em-tada"></i></h1>
                            <div className="modal-text">
                                <h1 className="status">YOU WIN</h1>
                                <h3 className="restart" onClick={this.props.close}>new</h3>
                            </div>
                        </div>
                    :
                        <div className="modal-content">
                            <h1><i class="em-svg em-flushed"></i></h1>
                            <div className="modal-text">
                                <h1 className="status">UH OH</h1>
                                <h3 className="restart" onClick={this.props.close}>try again</h3>
                            </div>
                        </div>}
            </div>   
        )
    }
}

export default Modal;