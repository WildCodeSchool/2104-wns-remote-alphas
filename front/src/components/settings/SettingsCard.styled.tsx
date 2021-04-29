import React from 'react';
import styled from 'styled-components';

const Card = styled.section`
	background-color: #ECEFF1; // todo: use theme background_light
	color: #292929; // todo: use theme secondary
	display: flex;
	justify-content: space-between;
	align-items: center;
    height: 80%;
    width: 80%;
    min-height: 500px;
    border-radius: 10px;
    margin: auto;
    margin-bottom: 2em;
    margin-top: 2em;
`;

const CardMenu = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #4E4E4E; // todo: use theme secondary lighter
    color: #D1DCE5; // todo: use theme light_text
    width: 25%;
    height: 100%;
    min-height: 500px;
    border-radius: 10px 0 0 10px;
    padding: 1em;
    font-size: 1.5em;
    font-weight: 500;
`;

const NavMenu = styled.nav`
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

const Divider = styled.hr`
border-top: 1px solid #fff;
`;

const CircleAvatar = styled.img`
width: 100px;
height: 100px;
vertical-align: middle;
border-radius: 50%;
text-align: center;
box-shadow: 13px 11px 20px 4px rgba(0,0,0,0.56);
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

const SettingsCard = (): JSX.Element => (
    <Card>
        <CardMenu>
        <CircleAvatar alt="user avatar" src="/assets/images/default-avatar.png" />
            <NavMenu>
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
            </NavMenu>
        </CardMenu>
    </Card>
);

export default SettingsCard;
