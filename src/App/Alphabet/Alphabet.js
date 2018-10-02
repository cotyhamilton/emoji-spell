import React, { Component } from 'react';
import './Alphabet.css';

class Alphabet extends Component {
    constructor(props) {
        super(props);
        let pool = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        this.letterList = this.props.goal.split('');
        this.letterList = this.letterList.filter(function(e, i, l) {
            return i === l.indexOf(e);
        });
        pool = pool.filter((e) => !this.letterList.includes(e));
        while(this.letterList.length < 16) {
            this.letterList.push(pool.pop([Math.floor(Math.random()*pool.length)]));
        }
        for(let i = 0; i < 16; i++) {
            let r = Math.floor(Math.random()*16);
            this.letterList[i] = [this.letterList[r], this.letterList[r] = this.letterList[i]][0];
        }
    }

    update = (l) => {
        this.props.update(l);
    }

    render () {
        return(
            <div className="alphabet">
                {this.letterList.map((l,i) =>
                    <button className="letter" onClick={(e) => this.update(l, e)} letter={l} key={i}>{l}</button>
                )}
            </div>
        )
    }
}

export default Alphabet;