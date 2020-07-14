import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './Card.module.css';
import CardHeader from './card-header';
import CardBody from './card-body';
import withLoadingDelay from '../../../hoc/WithLoadingDelay';

export class Card extends React.Component {
    constructor(props) {
        super(props);
        const { card, match } = this.props;
        const { title, info } = card;
        this.state = {
            isEditMode: match.path === '/card/:id',
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

    doubleClickHandler = (id) => {
        if (!this.state.isEditMode) {
            this.props.history.push(`card/${id}`);
        }
    };

    render() {
        const { isEditMode, title, info } = this.state;
        const { card, onTicked } = this.props;
        const { tick } = card;
        return (
            <div onDoubleClick={() => this.doubleClickHandler(card.id)}>
                <div
                    className={styles.card}
                    style={{ color: tick ? 'red' : 'green' }}
                >
                    <CardHeader
                        title={title}
                        isEditMode={isEditMode}
                        onTicked={onTicked}
                        onChanged={this.changeTitleHandle}
                        onEdit={this.editHandler}
                        onUndo={this.undoHandler}
                        onSave={this.saveHandler}
                    />
                    <hr />
                    <CardBody
                        info={info}
                        isEditMode={isEditMode}
                        changed={this.changeInfoHandle}
                    />
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    card: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
    onTicked: PropTypes.func.isRequired,
    history: PropTypes.any,
    match: PropTypes.any,
};

const mapStateToProps = (state) => ({
    readOnly: state.readOnlyReducer.readOnly,
});

export default connect(mapStateToProps)(withLoadingDelay(withRouter(Card)));
