import React from 'react';
import Card from './card';

const cardList = (props) =>
    props.cards.map((card) => (
        <Card
            card={card}
            readOnly={props.readOnly}
            key={card.id}
            onSave={(e1, e2) => props.clicked(e1, e2, card.id)}
            onTicked={(e) => props.ticked(card.id, e)}
        />
    ));

export default cardList;
