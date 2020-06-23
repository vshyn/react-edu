import React, { Component } from 'react';
import styles from './App.module.css';
import Header from '../components/header';
import Checkbox from '../components/checkbox';
import CardList from '../components/card-list/CardList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { id: 0, title: 'Caption 0', info: 'additional text 0' },
                { id: 1, title: 'Caption 1', info: 'additional text 1' },
                { id: 2, title: 'Caption 2', info: 'additional text 2' },
                { id: 3, title: 'Caption 3', info: 'additional text 3' },
                { id: 4, title: 'Caption 4', info: 'additional text 4' },
                { id: 5, title: 'Caption 5', info: 'additional text 5' },
                { id: 6, title: 'Caption 6', info: 'additional text 6' },
                { id: 7, title: 'Caption 7', info: 'additional text 7' },
                { id: 8, title: 'Caption 8', info: 'additional text 8' },
                { id: 9, title: 'Caption 9', info: 'additional text 9' },
            ],
            readOnly: false,
        };
    }

    saveHandler = (title, info, id) => {
        const { cards } = this.state;
        this.setState({
            cards: cards.map((card) =>
                card.id === id ? { title, info, id } : card
            ),
        });
    };

    onChangeMode = () => {
        const { readOnly } = this.state;
        this.setState({ readOnly: !readOnly });
    };

    deleteCards = () => {
        console.log('deleteCards');
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
                <div className={styles.cardWrapper}>
                    <CardList
                        cards={cards}
                        readOnly={readOnly}
                        clicked={this.saveHandler}
                    />
                </div>
            </div>
        );
    }
}

export default App;
