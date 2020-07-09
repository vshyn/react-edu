import React from 'react';
import { MdEdit, MdSave, MdUndo } from 'react-icons/md';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './CardHeader.module.css';

const cardHeader = ({
    title,
    isEditMode,
    onChanged,
    onTicked,
    onUndo,
    onSave,
    onEdit,
    readOnly,
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
                    {!readOnly && <MdEdit size={25} onClick={onEdit} />}
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

cardHeader.propTypes = {
    title: PropTypes.string.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    onTicked: PropTypes.func.isRequired,
    onChanged: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onUndo: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    readOnly: state.readOnly,
});

export default connect(mapStateToProps)(cardHeader);
