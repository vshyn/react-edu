import React from 'react';
import { Button } from 'reactstrap';
import styles from './App.module.css';
import Header from '../components/header';
import Checkbox from '../components/checkbox';
import CardList from '../components/card-list';
import CardsContext from '../context/cards-context';

const App = () => (
    <div>
        <Header title="Header" />
        <CardsContext.Consumer>
            {(context) => (
                <div className={styles.block}>
                    <label className={styles.label}>
                        <Checkbox
                            checked={context.readOnly}
                            onChange={context.onChangeMode}
                        />
                        Read only
                    </label>
                    <div className={styles.buttons}>
                        <Button color="success" onClick={context.createCard}>
                            Create new card
                        </Button>
                        <Button color="danger" onClick={context.deleteCards}>
                            Delete selected
                        </Button>
                    </div>
                </div>
            )}
        </CardsContext.Consumer>
        <CardList />
    </div>
);

export default App;
