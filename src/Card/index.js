import React from 'react';
import './Card.css';
import {MdEdit, MdSave, MdUndo} from "react-icons/md";

const Card = (props) => {
    return (<div>
            <div className="card" style={{"color": props.isChecked ? "red" : "green"}}>
                <div className="container">
                    {props.isEditMode ?
                        <input type="text" value={props.title} onChange={props.changeTitle}/>
                        :
                        <h2>{props.title}</h2>}
                    {props.isEditMode ?
                        <div>
                            <MdUndo size={25} onClick={props.undo}/>
                            <MdSave size={25} onClick={props.save}/>
                        </div>
                        :
                        <div>
                            <MdEdit size={25} onClick={props.edit}/>
                            <input className="checkbox" type="checkbox" onChange={props.check}/>
                        </div>
                    }
                </div>
                <hr/>
                {props.isEditMode ?
                    <input type="text" value={props.info} onChange={props.changeInfo}/>
                    :
                    <p>{props.info}</p>}
            </div>
        </div>
    )
}

export default Card;