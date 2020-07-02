import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';
import styles from './Header.module.css';
import CardsContext from '../../context/cards-context';
import NavBar from '../navigation/NavBar';

const header = ({ title }) => (
    <CardsContext.Consumer>
        {(context) => (
            <div className={styles.header}>
                <NavBar />
                <h1>
                    {title} <Badge color="info">{context.getCardsCount()}</Badge>
                </h1>
            </div>
        )}
    </CardsContext.Consumer>
);

header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default header;
