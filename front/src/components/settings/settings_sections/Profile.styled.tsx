/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
// import Field from '../../Field.styled';

/**
 * Profile displays the user profile's form
 */

/// Style the form
const Form = styled.form`
    display: grid;
    grid-template-columns: 50% 50%;
    width: 100%;
    margin: 1em;
`;

/// Style the form columns
const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin: 1em;
`;

/// Style the input
const Input = styled.input`
		border-radius: 10px;
		background-color: #4e4e4e;
		color: #d1dce5;
		height: 2.5em;
		width: 90%;
        :focus-visible label {
            color: #FE7F2D;
            font-weight: bold;
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
    // TODO: connect to the back end
    // récupérer le user connecté
    // définir comme state initial
    // injecter dans le useState comme état initial
    const [userData, setUserData] = useState<IUserData>();
    const [nameFocused, setNameFocus] = useState(false);
    const [firstNameFocused, setFirstNameFocus] = useState(false);
    const [emailFocused, setEmailFocus] = useState(false);
    const [locationFocused, setLocationFocus] = useState(false);

    // console.log(userData);

    /// Define user name if it exists, or set a generic value.
    const userName = userData?.firstName ? userData?.firstName : 'student';

    return (
        <Column>
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
                            fontWeight: nameFocused ? 'bold' : 500
                        }}
                    >
                        Name
                        <Input
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
            <button type="submit">Save</button>
        </Column>
    );
};

export default Profile;
