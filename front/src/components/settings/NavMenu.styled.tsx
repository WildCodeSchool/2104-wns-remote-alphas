import React from 'react';
import styled from 'styled-components';
import Divider from '../core/Divider.styled';
import { SECTIONS } from '../../utils/types';

/**
 * NavMenu displays the setting cards' navigation menu, with links and icons.
 * It updates the section displayed in the settings view on click on an item.
 */

const Nav = styled.nav`
	width: 100%;
	ul {
		text-align: right;
		padding: 0;
		list-style-type: none;
		margin-block-start: 0;
	}
	.menu-title {
		font-size: 0.6em;
		font-weight: bold;
		color: #fff;
		text-align: left;
		position: relative;
		top: 10%;
	}
	hr:first-child {
		margin-block-start: 0;
	}
	li.active {
		color: ${(props) => props.theme.colors.tertiary};
	}
`;

const MenuIcon = styled.img`
	width: ${(props) => props.theme.fixedSize.icon.large};
	height: ${(props) => props.theme.fixedSize.icon.large};
	@media screen and (max-width: 780px) {
		width: 24px;
		height: 24px;
	}
`;

const MenuElement = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media screen and (max-width: 780px) {
		font-size: 12px;
	}
`;

interface NavMenuProps {
	updateSection: (e: SECTIONS) => void;
	section: string;
}

const NavMenu = ({ updateSection, section }: NavMenuProps): JSX.Element => (
	<Nav>
		<span className="menu-title">Customize</span>
		<ul>
			<Divider />
			<MenuElement
				className={`banner ${section === SECTIONS.COLORS ? 'active' : ''}`}
				onClick={() => updateSection(SECTIONS.COLORS)}>
				<MenuIcon src="/assets/icons/002-pantone.svg" />
				Colors
			</MenuElement>

			<Divider />
			<MenuElement
				className={`banner ${section === SECTIONS.TEXTS ? 'active' : ''}`}
				onClick={() => updateSection(SECTIONS.TEXTS)}>
				<MenuIcon src="/assets/icons/006-font-1.svg" />
				Texts & Fonts
			</MenuElement>

			<Divider />
			<MenuElement
				className={`banner ${
					section === SECTIONS.DISTRACTIONS ? 'active' : ''
				}`}
				onClick={() => updateSection(SECTIONS.DISTRACTIONS)}>
				<MenuIcon src="/assets/icons/004-brain.svg" />
				Distractions
			</MenuElement>

			<Divider />
			<MenuElement
				className={`banner ${section === SECTIONS.SETTINGS ? 'active' : ''}`}
				onClick={() => updateSection(SECTIONS.SETTINGS)}>
				<MenuIcon src="/assets/icons/003-wrench.svg" />
				Settings
			</MenuElement>
		</ul>
	</Nav>
);

export default NavMenu;
