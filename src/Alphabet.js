import React, { Component } from 'react';
import './Alphabet.css';

class Alphabet extends Component {
    update = (l) => {
        this.props.update(l);
    }

    render () {
        return(
            <div className="alphabet">
                {['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'].map((l,i) =>
                    <button className="letter" onClick={(e) => this.update(l, e)} letter={l} key={i}>{l}</button>
                )}
            </div>
        )
    }
}

export default Alphabet;