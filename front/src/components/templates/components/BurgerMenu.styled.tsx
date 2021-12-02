import React from 'react';
import styled from 'styled-components';

/// Build a collapsible drawer with a burger button
const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 100vw;
    height: 100vh;
    background-color: #424242;
    text-align: left;
    padding: 32px 112px 16px 16px;
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: translateX(-100%);
    gap: 2em;
    &[data-open='true'] {
        transform: translateX(0);
    }
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: none;
    z-index: 1000;
    &[data-open='true'] {
        display: block;
    }
`;

interface MenuProps {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
}

const BurgerMenu = (props: MenuProps): JSX.Element => {
    const { children, open, onClose } = props;

    function handleKeypress(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === 'Esc') {
            onClose();
        }
    }

    React.useEffect(() => {
        function fn(event: KeyboardEvent) {
            if (event.key === 'Esc') {
                onClose();
            }
        }

        document.addEventListener('keydown', fn);

        return () => document.removeEventListener('keydown', fn);
    }, [onClose]);

    return (
        <div>
            <Overlay
                onClick={onClose}
                role="presentation"
                onKeyPress={handleKeypress}
                data-open={JSON.stringify(open)}
            />
            <Nav data-open={JSON.stringify(open)}>
                {children}
            </Nav>
        </div>
    );
};

export default BurgerMenu;
