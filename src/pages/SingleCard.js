import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../components/card-list/card/Card';
import { ticked, update } from '../store/actions';
import ErrorPage from './ErrorPage';

const SingleCard = ({ cards, match }) => {
    const singleCard = cards.filter((card) => card.id === match.params.id)[0];
    return singleCard ? (
        <Card
            card={singleCard}
            onSave={(e1, e2) => update(e1, e2, singleCard.id)}
            onTicked={(isEdit) => ticked(singleCard.id, !singleCard.tick, isEdit)}
        />
    ) : (
        <ErrorPage />
    );
};

SingleCard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object),
    match: PropTypes.any,
};

const mapStateToProps = (state) => ({
    cards: state.cards,
});

const mapDispatchToProps = {
    ticked,
    update,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCard);
