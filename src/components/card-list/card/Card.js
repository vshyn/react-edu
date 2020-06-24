import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import CardHeader from './card-header/CardHeader';
import CardBody from './card-body/CardBody';

export class Card extends React.Component {
    constructor(props) {
        super(props);
        const { card } = this.props;
        const { title, info } = card;
        this.state = {
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
        });
        this.props.onTicked(false);
    };

    undoHandler = () => {
        const { isEditMode, tempTitle, tempInfo } = this.state;
        const { title, info } = this.props.card;
        this.setState({
            isEditMode: !isEditMode,
            title: tempTitle || title,
            info: tempInfo || info,
        });
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

    saveHandler = () => {
        const { isEditMode } = this.state;
        this.setState({
            isEditMode: !isEditMode,
            tempTitle: '',
            tempInfo: '',
        });
        this.props.onSave(this.state.title, this.state.info);
    };

    render() {
        const { isEditMode, title, info } = this.state;
        const { readOnly, card, onTicked } = this.props;
        const { tick } = card;
        return (
            <div>
                <div
                    className={styles.card}
                    style={{ color: tick ? 'red' : 'green' }}
                >
                    <CardHeader
                        title={title}
                        readOnly={readOnly}
                        isEditMode={isEditMode}
                        ticked={onTicked}
                        changed={this.changeTitleHandle}
                        edit={this.editHandler}
                        undo={this.undoHandler}
                        save={this.saveHandler}
                    />
                    <hr />
                    <CardBody
                        info={info}
                        readOnly={readOnly}
                        isEditMode={isEditMode}
                        changed={this.changeInfoHandle}
                    />
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    title: PropTypes.string,
    info: PropTypes.string,
    card: PropTypes.object,
    onSave: PropTypes.func,
    readOnly: PropTypes.bool,
    onTicked: PropTypes.func,
    tick: PropTypes.bool,
};

export default Card;
