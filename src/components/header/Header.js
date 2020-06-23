import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
    <div className="header">
        <h1>{title}</h1>
    </div>
);

Header.propTypes = {
    title: PropTypes.string,
};

export default Header;
