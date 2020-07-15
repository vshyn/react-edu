import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const CardBody = ({ isEditMode, info, changed, readOnly }) => (
    <div>
        {isEditMode && !readOnly ? (
            <textarea value={info} onChange={changed} />
        ) : (
            <p>{info}</p>
        )}
    </div>
);

CardBody.propTypes = {
    info: PropTypes.string.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    changed: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
};

export const mapStateToProps = (state) => ({
    readOnly: state.readOnlyReducer.readOnly,
});

export default connect(mapStateToProps)(CardBody);
