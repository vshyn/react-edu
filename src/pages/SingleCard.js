import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../components/card-list/card/Card';
import { ticked, update } from '../store/actions';
import ErrorPage from './ErrorPage';

const SingleCard = ({ cards, match, updateCard, changeTicked }) => {
    const singleCard = cards.filter((card) => card.id === match.params.id)[0];
    return singleCard ? (
        <Card
            card={singleCard}
            onSave={(e1, e2) => updateCard(e1, e2, singleCard.id)}
            onTicked={(isEdit) =>
                changeTicked(singleCard.id, !singleCard.tick, isEdit)
            }
        />
    ) : (
        <ErrorPage />
    );
};

SingleCard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object),
    match: PropTypes.any,
    updateCard: PropTypes.func,
    changeTicked: PropTypes.func,
};

const mapStateToProps = (state) => ({
    cards: state.cards,
});

const mapDispatchToProps = {
    changeTicked: ticked,
    updateCard: update,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCard);
