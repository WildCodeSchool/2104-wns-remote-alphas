import React from 'react';
import styled from 'styled-components';
import FormField from '../../FormField.styled';

/**
 * NavMenu displays the setting cards' navigation menu, with links and icons
 */
const Form = styled.form`
`;

const Profile = (): JSX.Element => (
    <Form>
        <FormField type="text" label="name" />
    </Form>
);

export default Profile;
