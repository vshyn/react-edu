import React from 'react';
import './Card.css';

const card = (props) => {
    return (
        <div className="card">
          <h2>{props.title}</h2><hr/>
          <p>{props.info}</p>
        </div>
    )
}

export default card;