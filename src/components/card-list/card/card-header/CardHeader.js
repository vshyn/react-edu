import React from 'react';
import { MdEdit, MdSave, MdUndo } from 'react-icons/md';
import PropTypes from 'prop-types';
import styles from './CardHeader.module.css';

const cardHeader = ({
    title,
    isEditMode,
    readOnly,
    changed,
    ticked,
    undo,
    save,
    edit,
}) => {
    const editBtn = !readOnly ? <MdEdit size={25} onClick={edit} /> : null;
    let caption = <h2>{title}</h2>;
    let buttons = (
        <div>
            {editBtn}
            <input className={styles.checkbox} type="checkbox" onChange={ticked} />
        </div>
    );
    if (isEditMode && !readOnly) {
        caption = <textarea value={title} onChange={changed} />;
        buttons = (
            <div>
                <MdUndo size={25} onClick={undo} />
                <MdSave size={25} onClick={save} />
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
    title: PropTypes.string,
    readOnly: PropTypes.bool,
    isEditMode: PropTypes.bool,
    ticked: PropTypes.func,
    changed: PropTypes.func,
    save: PropTypes.func,
    undo: PropTypes.func,
    edit: PropTypes.func,
};

export default cardHeader;
