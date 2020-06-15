import React, {useState} from 'react';
import './Card.css';

const Card = (props) => {
    const [styleState, setStyleState] = useState(
        {checked: false}
    );

    const changeStyle = () => {
        setStyleState({checked: !styleState.checked})
    };

    return (
        <div className="card" style={{"color": styleState.checked ? "red" : "green"}}>
            <div className="container">
                <h2>{props.title}</h2>
                <input className="checkbox" type="checkbox" onChange={changeStyle}/>
            </div>
            <hr/>
            <p>{props.info}</p>
        </div>
    )
}

export default Card;