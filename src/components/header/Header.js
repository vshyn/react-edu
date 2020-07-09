import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';
import { connect } from 'react-redux';
import styles from './Header.module.css';
import NavBar from '../navigation/NavBar';

const header = ({ title, cards }) => (
    <div className={styles.header}>
        <NavBar />
        <h1>
            {title} <Badge color="info">{cards.length}</Badge>
        </h1>
    </div>
);

header.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
    cards: state.cards,
});

export default connect(mapStateToProps)(header);
