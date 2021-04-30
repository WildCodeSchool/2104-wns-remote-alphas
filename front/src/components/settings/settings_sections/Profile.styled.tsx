import React from 'react';
import styled from 'styled-components';
import Field from '../../Field.styled';

/**
 * NavMenu displays the setting cards' navigation menu, with links and icons
 */
const Form = styled.form`
    display: grid;
    grid-template-columns: 50% 50%;
    width: 100%;
    margin: 1em;
    input:focus + label{
        color: #FE7F2D;
        font-weight: bold;
    }
    label {
        font-weight: 500;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin: 1em;
`;

const Profile = (): JSX.Element => (
    <Form>
        <Column>
            <Field type="text" label="Name" />
            <Field type="email" label="Email" />
        </Column>
        <Column>
            <Field type="text" label="First Name" />
            <Field type="text" label="Location" />
        </Column>
    </Form>
);

export default Profile;
