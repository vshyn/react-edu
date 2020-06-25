import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const header = ({ title }) => (
    <div className={styles.header}>
        <h1>{title}</h1>
    </div>
);

header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default header;
