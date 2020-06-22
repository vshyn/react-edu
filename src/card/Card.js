import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import { MdEdit, MdSave, MdUndo } from 'react-icons/md';

export class Card extends React.Component {
    constructor(props) {
        super(props);
        const { title, info } = this.props;
        this.state = {
            isChecked: false,
            isEditMode: false,
            title,
            tempTitle: '',
            info,
            tempInfo: '',
        };
    }

    editHandler = () => {
        const { isEditMode } = this.state;
        this.setState({
            isEditMode: !isEditMode.isEditMode,
            isChecked: false,
        });
    };

    undoHandler = () => {
        const { isEditMode, tempTitle, tempInfo } = this.state;
        const { title, info } = this.props;
        this.setState({
            isEditMode: !isEditMode,
            title: tempTitle || title,
            info: tempInfo || info,
        });
    };

    changeStyleHandler = () => {
        const { isChecked } = this.state;
        this.setState({ isChecked: !isChecked });
    };

    changeTitleHandle = (event) => {
        const { title } = this.state;
        if (this.state.tempTitle === '') {
            this.setState({ tempTitle: title });
        }
        this.setState({ title: event.target.value });
    };

    changeInfoHandle = (event) => {
        const { info } = this.state;
        if (this.state.tempInfo === '') {
            this.setState({ tempInfo: info });
        }
        this.setState({ info: event.target.value });
    };

    componentDidUpdate = () => {
        if (this.props.readOnly && this.state.isEditMode) {
            this.undoHandler();
        }
    };

    render() {
        const { isChecked, isEditMode, title, info } = this.state;
        const { onSave, readOnly } = this.props;

        let caption = <h2>{title}</h2>;
        let text = <p>{info}</p>;
        if (isEditMode && !readOnly) {
            text = <textarea value={info} onChange={this.changeInfoHandle} />;
            caption = <textarea value={title} onChange={this.changeTitleHandle} />;
        }

        return (
            <div>
                <div className="card" style={{ color: isChecked ? 'red' : 'green' }}>
                    <div className="container">
                        {caption}
                        {isEditMode && !readOnly ? (
                            <div>
                                <MdUndo size={25} onClick={this.undoHandler} />
                                <MdSave
                                    size={25}
                                    onClick={() => {
                                        this.setState({
                                            isEditMode: !isEditMode,
                                            tempTitle: '',
                                            tempInfo: '',
                                        });
                                        onSave(title, info);
                                    }}
                                />
                            </div>
                        ) : (
                            <div>
                                {readOnly ? null : (
                                    <MdEdit size={25} onClick={this.editHandler} />
                                )}
                                <input
                                    className="checkbox"
                                    type="checkbox"
                                    onChange={this.changeStyleHandler}
                                />
                            </div>
                        )}
                    </div>
                    <hr />
                    {text}
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    title: PropTypes.string,
    info: PropTypes.string,
    onSave: PropTypes.func,
    readOnly: PropTypes.bool,
};

export default Card;