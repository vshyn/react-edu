import React from 'react';
import Card from './card';

const cardList = (props) =>
    props.cards.map((card) => (
        <Card
            title={card.title}
            info={card.info}
            readOnly={props.readOnly}
            isChecked={card.isChecked}
            key={card.id}
            onSave={(e1, e2) => props.clicked(e1, e2, card.id)}
        />
    ));

export default cardList;
