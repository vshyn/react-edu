import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const cardBody = ({ isEditMode, info, changed, readOnly }) => (
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
    isEditMode: PropTypes.bool.isRequired,
    changed: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    readOnly: state.readOnly,
});

export default connect(mapStateToProps)(cardBody);
