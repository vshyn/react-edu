import React from 'react';
import { MdEdit, MdSave, MdUndo } from 'react-icons/md';
import PropTypes from 'prop-types';
import styles from './CardHeader.module.css';

const cardHeader = ({
    title,
    isEditMode,
    readOnly,
    onChanged,
    onTicked,
    onUndo,
    onSave,
    onEdit,
}) => {
    let caption = <h2>{title}</h2>;
    let buttons = (
        <div>
            {!readOnly && <MdEdit size={25} onClick={onEdit} />}
            <input className={styles.checkbox} type="checkbox" onClick={onTicked} />
        </div>
    );
    if (isEditMode && !readOnly) {
        caption = <textarea value={title} onChange={onChanged} />;
        buttons = (
            <div>
                <MdUndo size={25} onClick={onUndo} />
                <MdSave size={25} onClick={onSave} />
            </div>
        );
    }

    return (
        <div className={styles.container}>
            {caption}
            {buttons}
        </div>
    );
};

cardHeader.propTypes = {
    title: PropTypes.string.isRequired,
    readOnly: PropTypes.bool.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    onTicked: PropTypes.func.isRequired,
    onChanged: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onUndo: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default cardHeader;
