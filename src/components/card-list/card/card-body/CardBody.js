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
    info: PropTypes.string,
    readOnly: PropTypes.bool,
    isEditMode: PropTypes.bool,
    changed: PropTypes.func,
};

export default cardBody;
