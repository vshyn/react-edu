import React from 'react';
import { MdEdit, MdSave, MdUndo } from 'react-icons/md';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './CardHeader.module.css';

export const CardHeader = ({
    title,
    isEditMode,
    onChanged,
    onTicked,
    onUndo,
    onSave,
    onEdit,
    readOnly,
    authorized,
}) => (
    <div>
        {isEditMode && !readOnly ? (
            <div className={styles.container}>
                <textarea value={title} onChange={onChanged} />
                <div>
                    <MdUndo size={25} onClick={onUndo} />
                    <MdSave size={25} onClick={onSave} />
                </div>
            </div>
        ) : (
            <div className={styles.container}>
                <h2>{title}</h2>
                <div>
                    {!readOnly && authorized && (
                        <MdEdit size={25} onClick={onEdit} />
                    )}
                    <input
                        className={styles.checkbox}
                        type="checkbox"
                        onClick={onTicked}
                    />
                </div>
            </div>
        )}
    </div>
);

CardHeader.propTypes = {
    title: PropTypes.string.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    onTicked: PropTypes.func.isRequired,
    onChanged: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onUndo: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
    authorized: PropTypes.bool,
};

export const mapStateToProps = (state) => ({
    readOnly: state.readOnlyReducer.readOnly,
    authorized: state.authReducer.authorized,
});

export default connect(mapStateToProps)(CardHeader);
