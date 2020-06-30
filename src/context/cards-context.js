import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const CardsContext = React.createContext({
    cards: [],
    readOnly: false,
    getCardsCount: () => {},
    deleteCards: () => {},
    createCard: () => {},
    changeTickedHandler: () => {},
    saveHandler: () => {},
    onChangeMode: () => {},
});

export class CardsContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { id: uuidv4(), title: 'Caption 0', info: 'text 0', tick: false },
                { id: uuidv4(), title: 'Caption 1', info: 'text 1', tick: false },
                { id: uuidv4(), title: 'Caption 2', info: 'text 2', tick: false },
                { id: uuidv4(), title: 'Caption 3', info: 'text 3', tick: false },
                { id: uuidv4(), title: 'Caption 4', info: 'text 4', tick: false },
                { id: uuidv4(), title: 'Caption 5', info: 'text 5', tick: false },
                { id: uuidv4(), title: 'Caption 6', info: 'text 6', tick: false },
                { id: uuidv4(), title: 'Caption 7', info: 'text 7', tick: false },
                { id: uuidv4(), title: 'Caption 8', info: 'text 8', tick: false },
                { id: uuidv4(), title: 'Caption 9', info: 'text 9', tick: false },
            ],
            readOnly: false,
        };
    }

    getCardsCount = () => this.state.cards.length;

    deleteCards = () => {
        const { cards } = this.state;
        const newCards = cards.filter((card) => !card.tick);
        this.setState({ cards: newCards });
    };

    createCard = () => {
        const { cards } = this.state;
        const newCard = {
            id: uuidv4(),
            title: 'Caption',
            info: 'text',
            tick: false,
        };
        this.setState({ cards: [...cards, newCard] });
    };

    changeTickedHandler = (id, tick, isEdit) => {
        const newTick = !isEdit ? isEdit : tick;
        const { cards } = this.state;
        this.setState({
            cards: cards.map((card) =>
                card.id === id ? { ...card, tick: newTick, id } : card
            ),
        });
    };

    saveHandler = (title, info, id) => {
        const { cards } = this.state;
        this.setState({
            cards: cards.map((card) =>
                card.id === id ? { ...card, title, info, id } : card
            ),
        });
    };

    onChangeMode = () => {
        const { readOnly } = this.state;
        this.setState({ readOnly: !readOnly });
    };

    render() {
        const { cards, readOnly } = this.state;
        const { children } = this.props;
        return (
            <CardsContext.Provider
                value={{
                    cards,
                    readOnly,
                    getCardsCount: this.getCardsCount,
                    deleteCards: this.deleteCards,
                    createCard: this.createCard,
                    changeTickedHandler: this.changeTickedHandler,
                    saveHandler: this.saveHandler,
                    onChangeMode: this.onChangeMode,
                }}
            >
                {children}
            </CardsContext.Provider>
        );
    }
}

CardsContextProvider.propTypes = {
    children: PropTypes.any,
};

export default CardsContext;
