import React, { useState } from 'react';
import styled from 'styled-components';
import CircleAvatar from '../core/CircleAvatar.styled';
import Card from './components/Card.styled';
import CardMenu from './components/CardMenu.styled';
import NavMenu, { SECTIONS } from './NavMenu.styled';
import Colors from './settings_sections/Colors.styled';
import Distractions from './settings_sections/Distractions.styled';
import Profile from './settings_sections/Profile.styled';
import Texts from './settings_sections/Texts.styled';
import UserSettings from './settings_sections/UserSettings.styled';

const Wrapper = styled.div`
	height: calc(100vh - 113px - 105px);
	display: flex;
	align-items: center;
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

	/// Udpate the active section to change the view
	const updateSection = (menuItem: SECTIONS): void => {
		setSection(menuItem);
	};

	const sections = {
		[SECTIONS.COLORS]: <Colors />,
		[SECTIONS.DISTRACTIONS]: <Distractions />,
		[SECTIONS.PROFILE]: <Profile />,
		[SECTIONS.TEXTS]: <Texts />,
		[SECTIONS.SETTINGS]: <UserSettings />,
	};
	const displayedSection = sections[section];
	return (
		<Wrapper>
			<Card>
				<CardMenu>
					<CircleAvatar
						alt="user avatar"
						src="/assets/images/default-avatar.png"
						onClick={() => updateSection(SECTIONS.PROFILE)}
					/>
					<NavMenu section={section} updateSection={updateSection} />
				</CardMenu>
				{displayedSection}
			</Card>
		</Wrapper>
	);
};

export default Settings;
