import React from 'react';
import CircleAvatar from '../core/CircleAvatar.styled';
import Card from './Card.styled';
import CardMenu from './CardMenu.styled';
// import NavMenu from './NavMenu.styled';

/// FIXME: obsolete. this file is not used anymore

/**
 * SettingsCard provides an empty setting card with 2 sections:
 * a nav menu on the left, and an empty section to be filled with a nested child content.
 */

const SettingsCard = (props: Props): JSX.Element => {
    const { children } = props;

    return (
        <Card>
            <CardMenu>
            <CircleAvatar alt="user avatar" src="/assets/images/default-avatar.png" />
                {/* <NavMenu /> */}
            </CardMenu>
            {children}
        </Card>
    );
};

interface Props {
    children: React.ReactNode;
}

export default SettingsCard;
