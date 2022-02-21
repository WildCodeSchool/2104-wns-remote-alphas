/* eslint-disable no-confusing-arrow */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from 'react';
import { Switch } from 'react-router-dom';
import styled from 'styled-components';

interface SwitchProps {
    checked: boolean;
    setChecked: any;
}

const Checkbox = styled.input`
`;

const Container = styled.div`
    :focus-within {
        box-shadow: 0 0 10px 5px ${(props) => props.theme.colors.secondary};
    }
`;

const SwitchButton = ({ checked, setChecked }: SwitchProps): JSX.Element => (
    <Container className="button r" id="switch-btn">
        <Checkbox
            aria-label="checkbox"
            tabIndex={0}
            type="checkbox"
            className="checkbox"
            checked={checked}
            onClick={() => {
                setChecked(!checked);
            }}
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    console.log('enter pressed');
                    setChecked(!checked);
                }
            }} />
        <div className="knobs" />
        <div className="layer" />
    </Container>
);

export default SwitchButton;
