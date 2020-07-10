import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';
import { connect } from 'react-redux';
import styles from './Header.module.css';
import NavBar from '../navigation/NavBar';

const header = ({ cards, authorized }) => (
    <div className={styles.header}>
        <NavBar />
        <h1>
            Number of cards{' '}
            {authorized && <Badge color="info">{cards.length}</Badge>}
        </h1>
    </div>
);

header.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object),
    authorized: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    cards: state.cardReducer.cards,
    authorized: state.authReducer.authorized,
});

export default connect(mapStateToProps)(header);
