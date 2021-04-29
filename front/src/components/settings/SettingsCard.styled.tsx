import React from 'react';
import CircleAvatar from '../CircleAvatar.styled';
import Card from './Card.styled';
import CardMenu from './CardMenu.styled';
import NavMenu from './NavMenu.styled';

/**
 * SettingsCard provides an empty setting card with 2 sections:
 * a nav menu on the left, and an empty section to be filled with a prop child content.
 */

// Set props types and make it optional
interface SettingsCardProps {
	child?: React.ReactNode;
}

const SettingsCard = ({ child }: SettingsCardProps): JSX.Element => (
    <Card>
        <CardMenu>
        <CircleAvatar alt="user avatar" src="/assets/images/default-avatar.png" />
            <NavMenu />
        </CardMenu>
        {child}
    </Card>
);

// Set default props types
SettingsCard.defaultProps = {
    child: null,
};

export default SettingsCard;
