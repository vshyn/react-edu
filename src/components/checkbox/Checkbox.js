import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

const Tick = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 0.3rem;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    width: 0;
`;

const VisibleCheckbox = styled.div`
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    margin: 1rem;
    transform: scale(1.5);
    box-shadow: 0 0 0 0.1rem ${(props) => (props.checked ? 'red' : 'green')};
    background: ${(props) => (props.checked ? 'salmon' : 'lightgreen')};

    ${Tick} {
        visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    }
`;

const Checkbox = ({ checked, ...props }) => (
    <CheckboxContainer>
        <HiddenCheckbox checked={checked} {...props} />
        <VisibleCheckbox checked={checked}>
            <Tick viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
            </Tick>
        </VisibleCheckbox>
    </CheckboxContainer>
);

Checkbox.propTypes = {
    checked: PropTypes.bool,
};

export default Checkbox;
