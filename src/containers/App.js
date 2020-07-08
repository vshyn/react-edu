import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './App.module.css';
import Checkbox from '../components/checkbox';
import CardList from '../components/card-list';
import { create, remove, changeMode, loadCards } from '../store/actions';

class App extends Component {
    componentDidMount() {
        const { onLoadCards } = this.props;
        onLoadCards();
    }

    render() {
        const { readOnly, onChangeMode, createCard, deleteCards } = this.props;
        return (
            <div>
                <div className={styles.block}>
                    <label className={styles.label}>
                        <Checkbox checked={readOnly} onChange={onChangeMode} />
                        Read only
                    </label>
                    <div className={styles.buttons}>
                        <Button color="success" onClick={createCard}>
                            Create new card
                        </Button>
                        <Button color="danger" onClick={deleteCards}>
                            Delete selected
                        </Button>
                    </div>
                </div>
                <CardList />
            </div>
        );
    }
}

App.propTypes = {
    createCard: PropTypes.func,
    deleteCards: PropTypes.func,
    onChangeMode: PropTypes.func,
    onLoadCards: PropTypes.func,
    readOnly: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    readOnly: state.readOnly,
});

const mapDispatchToProps = {
    createCard: create,
    deleteCards: remove,
    onChangeMode: changeMode,
    onLoadCards: loadCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
