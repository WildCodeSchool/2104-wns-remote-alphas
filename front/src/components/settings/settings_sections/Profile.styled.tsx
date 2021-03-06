import { ApolloError, useMutation } from '@apollo/client';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { UPDATE_SETTINGS } from '../../../utils/apollo';
import type { NestedObject } from '../../../utils/objectUtilities';
import { deleteSomeKeys, removeTypename } from '../../../utils/objectUtilities';
import { User } from '../../../utils/types';
import Context from '../../context/Context';
import Button from '../../core/buttons/Button.styled';
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

/// Build the Profile component
const Profile = (): JSX.Element => {
  /// Fetch current user in context
  const { user, setUser } = useContext(Context);
  /// Handle fields focus
  const [nameFocused, setNameFocus] = useState(false);
  const [firstNameFocused, setFirstNameFocus] = useState(false);
  const [emailFocused, setEmailFocus] = useState(false);
  const [locationFocused, setLocationFocus] = useState(false);
  const [updateSettingsMutation] = useMutation<
    { updateSettings: User },
    { _id: string; newSettings: Omit<User, 'role' | 'id'> }
  >(UPDATE_SETTINGS);

  /// Define user name if it exists, or set a generic value.
  const userName = user?.firstName ? user?.firstName : 'student';

  async function handleSubmit() {
    try {
      const newSettings = removeTypename(({
        ...deleteSomeKeys(user, ['role', '_id']),
      } as unknown) as NestedObject);
      const result = await updateSettingsMutation({
        variables: {
          _id: user._id,
          newSettings: {
            ...((newSettings as unknown) as Omit<User, 'role' | 'id'>),
          },
        },
      });
      if (result?.data?.updateSettings) {
        // add persistency
        localStorage.setItem('user', JSON.stringify(result?.data?.updateSettings));
      }
    } catch (err) {
      if (err instanceof ApolloError) {
        console.error(err.message);
      }
    }
  }

  return (
    <Container>
      <h1>Welcome {userName} !</h1>
      <p>You can set up your profile informations here. Don&apos;t be shy !</p>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
        <Column style={{ margin: 'unset', marginBottom: '2rem' }}>
          <Field
            type="text"
            label="Name"
            onChange={(e) =>
              setUser({
                ...user,
                name: e.currentTarget.value,
              })
            }
            focused={nameFocused}
            onFocus={() => setNameFocus(true)}
            onBlur={() => setNameFocus(false)}
            value={user?.name}
          />

          <Field
            type="text"
            label="Email"
            onChange={(e) =>
              setUser({
                ...user,
                email: e.currentTarget.value,
              })
            }
            focused={emailFocused}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            value={user?.email}
          />
        </Column>

        <Column style={{ margin: 'unset', marginBottom: '2rem' }}>
          <Field
            type="text"
            label="First Name"
            onChange={(e) =>
              setUser({
                ...user,
                firstName: e.currentTarget.value,
              })
            }
            focused={firstNameFocused}
            onFocus={() => setFirstNameFocus(true)}
            onBlur={() => setFirstNameFocus(false)}
            value={user?.firstName}
          />
          <Field
            type="text"
            label="Location"
            onChange={(e) =>
              setUser({
                ...user,
                location: e.currentTarget.value,
              })
            }
            focused={locationFocused}
            onFocus={() => setLocationFocus(true)}
            onBlur={() => setLocationFocus(false)}
            value={user?.location}
          />
        </Column>
        <Button type="submit">Save</Button>
      </Form>
    </Container>
  );
};

export default Profile;
