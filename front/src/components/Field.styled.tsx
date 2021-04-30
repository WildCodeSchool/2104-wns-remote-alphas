import React, { useState } from 'react';
import styled from 'styled-components';

interface FormFieldProps {
    type?: string;
    label?: string;
}

const Field = ({ type, label }: FormFieldProps): JSX.Element => {
    const [input, setInput] = useState({});

    const handleInputChange = (e: any) => {
            console.log(e.currentTarget.value);
            return setInput({
            ...input,
            [e.currentTarget.name]: e.currentTarget.value
        });
    };
    /**
     * NavMenu displays the setting cards' navigation menu, with links and icons
     */
    // todo: change for theme props
    const Input = styled.input`
        border-radius: 10px;
        background-color: #4E4E4E;
        color: #D1DCE5;
        height: 2.5em;
        width: 90%;
    `;

    return (
        <>
            <label htmlFor={label}>
                {label}
            </label>
            <Input type={type} name={label} onChange={handleInputChange} />
        </>
    );
};

// Set default props types
Field.defaultProps = {
    type: null,
    label: null,
};

export default Field;
