import React from 'react';
import PropTypes from 'prop-types';

const cardBody = ({ isEditMode, readOnly, info, changed }) => (
    <div>
        {isEditMode && !readOnly ? (
            <textarea value={info} onChange={changed} />
        ) : (
            <p>{info}</p>
        )}
    </div>
);

cardBody.propTypes = {
    info: PropTypes.string.isRequired,
    readOnly: PropTypes.bool.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    changed: PropTypes.func.isRequired,
};

export default cardBody;
