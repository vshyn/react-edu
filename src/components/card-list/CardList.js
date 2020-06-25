import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';
import styles from './CardList.module.css';

const cardList = ({ cards, readOnly, onCardSaved, onCardTicked }) => (
    <div className={styles.cardWrapper}>
        {cards.map((card) => (
            <Card
                card={card}
                readOnly={readOnly}
                key={card.id}
                onSave={(e1, e2) => onCardSaved(e1, e2, card.id)}
                onTicked={(isEdit) => onCardTicked(card.id, !card.tick, isEdit)}
            />
        ))}
    </div>
);

cardList.propTypes = {
    cards: PropTypes.array.isRequired,
    readOnly: PropTypes.bool.isRequired,
    onCardSaved: PropTypes.func.isRequired,
    onCardTicked: PropTypes.func.isRequired,
};

export default cardList;
