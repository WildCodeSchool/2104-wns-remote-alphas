import React, { useState } from 'react';
import CircleAvatar from '../core/CircleAvatar.styled';
import Card from './Card.styled';
import CardMenu from './CardMenu.styled';
import NavMenu from './NavMenu.styled';
import Colors from './settings_sections/Colors.styled';
import Distractions from './settings_sections/Distractions.styled';
import Profile from './settings_sections/Profile.styled';
import Texts from './settings_sections/Texts.styled';
import UserSettings from './settings_sections/UserSettings.styled';

/**
 * Settings provides a setting card with 2 sections:
 * a nav menu on the left, and a settings section on the right.
 */

const Settings = (): JSX.Element => {
    const [section, setSection] = useState<string>('profile');

    const updateSection = (menuItem: string):void => {
        setSection(menuItem);
    };

    return (
        <Card>
            <CardMenu>
            <CircleAvatar alt="user avatar" src="/assets/images/default-avatar.png" onClick={() => updateSection('profile')} />
                <NavMenu section={section} updateSection={updateSection} />
            </CardMenu>
            {(section === 'profile') && <Profile />}
            {(section === 'colors') && <Colors />}
            {(section === 'texts') && <Texts />}
            {(section === 'distractions') && <Distractions />}
            {(section === 'settings') && <UserSettings />}
        </Card>
    );
};

export default Settings;
