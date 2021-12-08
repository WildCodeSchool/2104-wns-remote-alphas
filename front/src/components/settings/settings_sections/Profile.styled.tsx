/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Context from '../../context/Context';
import Field from '../../core/Field.styled';
import Column from '../../core/layout_parts/Column.styled';
import Container from '../components/SettingsContainer.styled';

/**
 * Profile displays the user profile's form
 */

/// Style the form
const Form = styled.form`
    display: grid;
    grid-template-columns: 50% 50%;
    width: 100%;
    margin: ${(props) => props.theme.margin.generic.small};
    @media screen and (max-width: 780px) {
        display: contents;

	}
`;

// TODO: style core button
const Button = styled.button`
    width: ${(props) => props.theme.fixedSize.button.small.width};
    height: ${(props) => props.theme.fixedSize.button.small.height};
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: ${(props) => props.theme.fixedSize.borderRadius};
    color: ${(props) => props.theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: 1px;
    @media screen and (max-width: 780px) {
        margin: auto;
	}
`;
/// Define user data interface with form fields
export interface IUserData {
    firstName?: string;
    name?: string;
    email?: string;
    location?: string;
}

/// Build the Profile component
const Profile = (): JSX.Element => {
    /// Fetch current user in context
    const { user } = useContext(Context);
    /// Set as initial data
    const [userData, setUserData] = useState<IUserData>(user);
    /// Handle fields focus
    const [nameFocused, setNameFocus] = useState(false);
    const [firstNameFocused, setFirstNameFocus] = useState(false);
    const [emailFocused, setEmailFocus] = useState(false);
    const [locationFocused, setLocationFocus] = useState(false);

    /// Define user name if it exists, or set a generic value.
    const userName = userData?.firstName ? userData?.firstName : 'student';

    return (
        <Container>
            <h1>
                Welcome {userName} !
            </h1>
            <p>You can set up your profile informations here. Don&apos;t be shy !</p>
            <Form>
                <Column>
                    <Field
                        type="text"
                        label="Name"
                        onChange={(e) => setUserData({
                            ...userData,
                            name: e.currentTarget.value
                        })}
                        focused={nameFocused}
                        onFocus={() => setNameFocus(true)}
                        onBlur={() => setNameFocus(false)}
                        value={userData?.name} />

                    <Field
                        type="text"
                        label="Email"
                        onChange={(e) => setUserData({
                            ...userData,
                            email: e.currentTarget.value
                        })}
                        focused={emailFocused}
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                        value={userData?.email} />
                </Column>

                <Column>
                    <Field
                        type="text"
                        label="First Name"
                        onChange={(e) => setUserData({
                            ...userData,
                            firstName: e.currentTarget.value
                        })}
                        focused={firstNameFocused}
                        onFocus={() => setFirstNameFocus(true)}
                        onBlur={() => setFirstNameFocus(false)}
                        value={userData?.firstName} />
                    <Field
                        type="text"
                        label="Location"
                        onChange={(e) => setUserData({
                            ...userData,
                            location: e.currentTarget.value
                        })}
                        focused={locationFocused}
                        onFocus={() => setLocationFocus(true)}
                        onBlur={() => setLocationFocus(false)}
                        value={userData?.location} />
                </Column>
            </Form>
            <Button type="submit">Save</Button>
        </Container>
    );
};

export default Profile;
