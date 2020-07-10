import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Main.module.css';
import CardList from '../components/card-list';
import { create, remove, loadCards } from '../store/actions';

class Main extends Component {
    componentDidMount() {
        const { cards, onLoadCards } = this.props;
        if (!cards || cards.length === 0) {
            onLoadCards();
        }
    }

    render() {
        const { createCard, deleteCards, authorized } = this.props;
        return (
            <div>
                {authorized && (
                    <div className={styles.buttons}>
                        <Button color="success" onClick={createCard}>
                            Create new card
                        </Button>
                        <Button color="danger" onClick={deleteCards}>
                            Delete selected
                        </Button>
                    </div>
                )}
                <CardList />
            </div>
        );
    }
}

Main.propTypes = {
    createCard: PropTypes.func,
    deleteCards: PropTypes.func,
    onLoadCards: PropTypes.func,
    cards: PropTypes.arrayOf(PropTypes.object),
    authorized: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    cards: state.cardReducer.cards,
    authorized: state.authReducer.authorized,
});

const mapDispatchToProps = {
    createCard: create,
    deleteCards: remove,
    onLoadCards: loadCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
