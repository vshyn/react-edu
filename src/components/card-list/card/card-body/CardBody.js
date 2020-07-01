import React from 'react';
import PropTypes from 'prop-types';
import CardsContext from '../../../../context/cards-context';

const cardBody = ({ isEditMode, info, changed }) => (
    <CardsContext.Consumer>
        {(context) => (
            <div>
                {isEditMode && !context.readOnly ? (
                    <textarea value={info} onChange={changed} />
                ) : (
                    <p>{info}</p>
                )}
            </div>
        )}
    </CardsContext.Consumer>
);

cardBody.propTypes = {
    info: PropTypes.string.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    changed: PropTypes.func.isRequired,
};

export default cardBody;
