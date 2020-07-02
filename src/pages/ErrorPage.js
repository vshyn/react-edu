import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const ErrorPage = ({ history }) => (
    <div>
        <h1>Oops! 404! Page not found!</h1>
        <Button
            color="secondary"
            onClick={() => {
                history.push('/');
            }}
        >
            Go to main page
        </Button>
    </div>
);

ErrorPage.propTypes = {
    history: PropTypes.any,
};

export default ErrorPage;
