import React from 'react';
import styled from 'styled-components';
import Divider from '../core/Divider.styled';

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
        font-size: .6em;
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
`;

const MenuElement = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

interface NavMenuProps {
    updateSection: (e: string) => void
    section: string
}

const NavMenu = ({
    updateSection,
    section
}: NavMenuProps): JSX.Element => (
    <Nav>
        <span className="menu-title">Customize</span>
        <ul>
            <Divider />
            <MenuElement
                className={`banner ${(section === 'colors') ? 'active' : ''}`}
                onClick={() => updateSection('colors')}>
                <MenuIcon src="/assets/icons/002-pantone.svg" />
                Colors
            </MenuElement>

            <Divider />
            <MenuElement
                className={`banner ${(section === 'texts') ? 'active' : ''}`}
                onClick={() => updateSection('texts')}>
                <MenuIcon src="/assets/icons/006-font-1.svg" />
                Texts & Fonts
            </MenuElement>

            <Divider />
            <MenuElement
                className={`banner ${(section === 'distractions') ? 'active' : ''}`}
                onClick={() => updateSection('distractions')}>
                <MenuIcon src="/assets/icons/004-brain.svg" />
                Distractions
            </MenuElement>

            <Divider />
            <MenuElement
            className={`banner ${(section === 'settings') ? 'active' : ''}`}
            onClick={() => updateSection('settings')}>
                <MenuIcon src="/assets/icons/003-wrench.svg" />
                Settings
            </MenuElement>
        </ul>
    </Nav>
);

export default NavMenu;
