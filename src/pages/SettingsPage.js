import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Checkbox from '../components/checkbox';
import { changeMode } from '../store/actions';

const SettingsPage = ({ readOnly, onChangeMode }) => (
    <label>
        <Checkbox checked={readOnly} onChange={onChangeMode} />
        Read only
    </label>
);

SettingsPage.propTypes = {
    onChangeMode: PropTypes.func,
    readOnly: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    readOnly: state.readOnlyReducer.readOnly,
});

const mapDispatchToProps = {
    onChangeMode: changeMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
