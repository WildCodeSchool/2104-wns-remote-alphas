import React from 'react';
import styled from 'styled-components';
import Divider from '../Divider.styled';

/**
 * NavMenu displays the setting cards' navigation menu, with links and icons
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
    color: #FE7F2D;
}
`;

const MenuIcon = styled.img`
width: 48px;
height: 48px;
`;

const MenuElement = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
`;

const NavMenu = (): JSX.Element => (
    <Nav>
        <span className="menu-title">Customize</span>
        <ul>
            <Divider />
            <MenuElement className="active">
                <MenuIcon src="/assets/icons/002-pantone.svg" />
                Colors
            </MenuElement>
            <Divider />
            <MenuElement>
                <MenuIcon src="/assets/icons/006-font-1.svg" />
                Texts & Fonts
            </MenuElement>
            <Divider />
            <MenuElement>
                <MenuIcon src="/assets/icons/004-brain.svg" />
                Distractions
            </MenuElement>
            <Divider />
            <MenuElement>
                <MenuIcon src="/assets/icons/003-wrench.svg" />
                Settings
            </MenuElement>
        </ul>
    </Nav>
);

export default NavMenu;
