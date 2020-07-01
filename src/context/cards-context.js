import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import axios from 'axios';

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
            readOnly: false,
            cards: [],
        };
    }

    componentDidMount() {
        axios
            .get(
                'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json'
            )
            .then((response) => {
                const cards = response.data.slice(0, 15).map((line) => ({
                    id: uuidv4(),
                    title: line.Name,
                    info: line.About,
                    tick: false,
                }));
                this.setState({ cards });
            })
            .catch((e) => {
                console.log(e);
            });
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
