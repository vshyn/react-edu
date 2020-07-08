import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from './card';
import styles from './CardList.module.css';
import { ticked, update } from '../../store/actions';

const cardList = ({ cards, updateCard, changeTicked }) => (
    <div className={styles.cardWrapper}>
        {cards.map((card) => (
            <Card
                card={card}
                key={card.id}
                onSave={(e1, e2) => updateCard(e1, e2, card.id)}
                onTicked={(isEdit) => changeTicked(card.id, !card.tick, isEdit)}
            />
        ))}
    </div>
);

cardList.propTypes = {
    updateCard: PropTypes.func,
    changeTicked: PropTypes.func,
    cards: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
    cards: state.cards,
    readOnly: state.readOnly,
});

const mapDispatchToProps = {
    changeTicked: ticked,
    updateCard: update,
};

export default connect(mapStateToProps, mapDispatchToProps)(cardList);
