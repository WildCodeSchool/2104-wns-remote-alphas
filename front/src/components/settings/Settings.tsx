import { ApolloError, useMutation } from '@apollo/client';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { UPDATE_SETTINGS } from '../../utils/apollo';
import {
  deleteSomeKeys,
  NestedObject,
  removeTypename,
} from '../../utils/objectUtilities';
import { SECTIONS, User } from '../../utils/types';
import Context from '../context/Context';
import CircleAvatar from '../core/CircleAvatar.styled';
import Card from './components/Card.styled';
import CardMenu from './components/CardMenu.styled';
import NavMenu from './NavMenu.styled';
import Colors from './settings_sections/Colors.styled';
import Distractions from './settings_sections/Distractions.styled';
import Profile from './settings_sections/Profile.styled';
import Texts from './settings_sections/Texts.styled';
import UserSettings from './settings_sections/UserSettings.styled';

const Wrapper = styled.div`
  height: calc(100vh - 113px - 105px);
  display: flex;
  align-items: center;
  @media screen and (max-width: 780px) {
    height: inherit;
  }
`;

/**
 * Settings provides a setting card with 2 sections:
 * a nav menu on the left, and a settings section on the right.
 * The settings section switch when the user clicks on a navmenu item,
 * to display the current selected section.
 */

const Settings = (): JSX.Element => {
  /// Define default and current section (default is profile)
  const [section, setSection] = useState<SECTIONS>(SECTIONS.PROFILE);

  const { user } = useContext(Context);
  const [newSettings, setNewSettings] = useState(
    removeTypename({
      ...deleteSomeKeys(user, ['role', '_id']),
    } as unknown as NestedObject),
  );

  const [updateSettingsMutation] = useMutation<
    { updateSettings: User },
    { _id: string; newSettings: Omit<User, 'role' | 'id'> }
  >(UPDATE_SETTINGS);
  /// Udpate the active section to change the view
  const updateSection = (menuItem: SECTIONS): void => {
    setSection(menuItem);
  };

  useEffect(() => {
    setNewSettings(
      removeTypename({
        ...deleteSomeKeys(user, ['role', '_id']),
      } as unknown as NestedObject),
    );
  }, [user]);

  async function persistData() {
    try {
      const result = await updateSettingsMutation({
        variables: {
          _id: user._id,
          newSettings: {
            ...(removeTypename({
              ...deleteSomeKeys(user, ['role', '_id']),
            } as unknown as NestedObject) as unknown as Omit<User, 'role' | 'id'>),
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
  const sections = {
    [SECTIONS.COLORS]: <Colors />,
    [SECTIONS.DISTRACTIONS]: <Distractions />,
    [SECTIONS.PROFILE]: <Profile />,
    [SECTIONS.TEXTS]: <Texts />,
    [SECTIONS.SETTINGS]: <UserSettings />,
  };
  const displayedSection = sections[section];

  useEffect(() => {
    return () => {
      persistData();
    };
  }, [newSettings]);

  return (
    <Wrapper>
      <Card id="main-content">
        <CardMenu>
          <CircleAvatar
            tabIndex={0}
            alt="user settings"
            src="/assets/images/default-avatar.png"
            onClick={() => updateSection(SECTIONS.PROFILE)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                updateSection(SECTIONS.PROFILE);
              }
            }}
          />
          <NavMenu section={section} updateSection={updateSection} />
        </CardMenu>
        {displayedSection}
      </Card>
    </Wrapper>
  );
};

export default Settings;
