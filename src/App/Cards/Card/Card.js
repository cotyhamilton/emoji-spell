import React from 'react';
import './Card.css';

const Card = props => (
  <div className="card" id={props.id} key={props.id} onClick={(e) => {props.startGame(props.id, props.emoji, e)}}>
      <i className={'em-svg em-' + props.emoji}></i>
  </div>
);

export default Card;