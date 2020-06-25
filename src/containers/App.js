import React, { Component } from 'react';
import styles from './App.module.css';
import Header from '../components/header';
import Checkbox from '../components/checkbox';
import CardList from '../components/card-list';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { id: 0, title: 'Caption 0', info: 'text 0', tick: false },
                { id: 1, title: 'Caption 1', info: 'text 1', tick: false },
                { id: 2, title: 'Caption 2', info: 'text 2', tick: false },
                { id: 3, title: 'Caption 3', info: 'text 3', tick: false },
                { id: 4, title: 'Caption 4', info: 'text 4', tick: false },
                { id: 5, title: 'Caption 5', info: 'text 5', tick: false },
                { id: 6, title: 'Caption 6', info: 'text 6', tick: false },
                { id: 7, title: 'Caption 7', info: 'text 7', tick: false },
                { id: 8, title: 'Caption 8', info: 'text 8', tick: false },
                { id: 9, title: 'Caption 9', info: 'text 9', tick: false },
            ],
            readOnly: false,
        };
    }

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

    deleteCards = () => {
        const { cards } = this.state;
        const newCards = cards.filter((card) => !card.tick);
        this.setState({ cards: newCards });
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

    render() {
        const { cards, readOnly } = this.state;
        return (
            <div>
                <Header title="Header" />
                <div className={styles.block}>
                    <label className={styles.label}>
                        <Checkbox checked={readOnly} onChange={this.onChangeMode} />
                        Read only
                    </label>
                    <button
                        type="button"
                        onClick={this.deleteCards}
                        className={styles.button}
                    >
                        Delete selected
                    </button>
                </div>
                <CardList
                    cards={cards}
                    readOnly={readOnly}
                    onCardSaved={this.saveHandler}
                    onCardTicked={this.changeTickedHandler}
                />
            </div>
        );
    }
}

export default App;
