/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Context from '../../context/Context';
import Container from '../components/SettingsContainer.styled';
// import Field from '../../Field.styled';

/**
 * Profile displays the user profile's form
 */

/// Style the form
const Form = styled.form`
    display: grid;
    grid-template-columns: 50% 50%;
    width: 100%;
    margin: ${(props) => props.theme.margin.generic.small};
`;

/// Style the form columns
const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${(props) => props.theme.margin.generic.small};
    gap: ${(props) => props.theme.margin.generic.small};
`;

/// Style the input
const Input = styled.input`
	border-radius: ${(props) => props.theme.fixedSize.borderRadius};
	background-color: ${(props) => props.theme.colors.secondaryLighter};
	color: ${(props) => props.theme.colors.primaryLighter};
	height: ${(props) => props.theme.fixedSize.field.height};
	width: 90%;
`;

const Button = styled.button`
    width: ${(props) => props.theme.fixedSize.button.small.width};
    height: ${(props) => props.theme.fixedSize.button.small.height};
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: ${(props) => props.theme.fixedSize.borderRadius};
    color: ${(props) => props.theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: 1px;
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

    // console.log(userData);

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
                    <label
                        htmlFor="Name"
                        style={{
                            color: nameFocused ? '#FE7F2D' : '',
                            fontWeight: nameFocused ? 'bold' : 500,
                        }}
                    >
                        Name
                        <Input
                            style={{
                                border: nameFocused ? '3px solid #FE7F2D' : '',
                                outline: 'none'
                            }}
                            onFocus={() => setNameFocus(true)}
                            onBlur={() => setNameFocus(false)}
                            id="Name"
                            type="text"
                            name="Name"
                            onChange={(e) => setUserData({
                                ...userData,
                                name: e.currentTarget.value
                            })}
                            key="Name"
                            value={userData?.name}
                        />
                    </label>

                    <label
                        htmlFor="Email"
                        style={{
                            color: emailFocused ? '#FE7F2D' : '',
                            fontWeight: emailFocused ? 'bold' : 500
                        }}
                    >
                        Email
                        <Input
                            style={{
                                border: emailFocused ? '3px solid #FE7F2D' : '',
                                outline: 'none'
                            }}
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                            id="Email"
                            type="text"
                            name="Email"
                            onChange={(e) => setUserData({
                                ...userData,
                                email: e.currentTarget.value
                            })}
                            key="Email"
                            value={userData?.email}
                        />
                    </label>
                </Column>

                <Column>
                    <label
                        htmlFor="firstName"
                        style={{
                            color: firstNameFocused ? '#FE7F2D' : '',
                            fontWeight: firstNameFocused ? 'bold' : 500
                        }}
                    >
                        First Name
                        <Input
                            style={{
                                border: firstNameFocused ? '3px solid #FE7F2D' : '',
                                outline: 'none'
                            }}
                            onFocus={() => setFirstNameFocus(true)}
                            onBlur={() => setFirstNameFocus(false)}
                            id="firstName"
                            type="text"
                            name="firstName"
                            onChange={(e) => setUserData({
                                ...userData,
                                firstName: e.currentTarget.value
                            })}
                            key="firstName"
                            value={userData?.firstName}
                        />
                    </label>

                    <label
                        htmlFor="Location"
                        style={{
                            color: locationFocused ? '#FE7F2D' : '',
                            fontWeight: locationFocused ? 'bold' : 500
                        }}
                    >
                        Location
                        <Input
                            style={{
                                border: locationFocused ? '3px solid #FE7F2D' : '',
                                outline: 'none'
                            }}
                            onFocus={() => setLocationFocus(true)}
                            onBlur={() => setLocationFocus(false)}
                            id="Location"
                            type="text"
                            name="Location"
                            onChange={(e) => setUserData({
                                ...userData,
                                location: e.currentTarget.value
                            })}
                            key="Location"
                            value={userData?.location}
                        />
                    </label>

                    {/* FIXME:  Field lost focus on typing because of component refresh */}
                    {/* <Field
                        type="text"
                        label="Location"
                        onChange={(e) => setUserData({
                            ...userData,
                            location: e.currentTarget.value
                        })}
                        focused={locationFocused}
                        onFocus={() => setLocationFocus(true)}
                        onBlur={() => setLocationFocus(false)}
                        value={userData?.location} /> */}
                </Column>
            </Form>
            <Button type="submit">Save</Button>
        </Container>
    );
};

export default Profile;
