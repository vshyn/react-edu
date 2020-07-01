import React from 'react';
import Card from './card';
import styles from './CardList.module.css';
import CardsContext from '../../context/cards-context';

const cardList = () => (
    <CardsContext.Consumer>
        {(context) => (
            <div className={styles.cardWrapper}>
                {context.cards.map((card) => (
                    <Card
                        card={card}
                        key={card.id}
                        readOnly={context.readOnly}
                        onSave={(e1, e2) => context.saveHandler(e1, e2, card.id)}
                        onTicked={(isEdit) =>
                            context.changeTickedHandler(card.id, !card.tick, isEdit)
                        }
                    />
                ))}
            </div>
        )}
    </CardsContext.Consumer>
);

export default cardList;
