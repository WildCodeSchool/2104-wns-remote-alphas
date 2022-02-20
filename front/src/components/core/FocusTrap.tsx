/* eslint-disable no-confusing-arrow */
/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useRef } from 'react';

/**
 * Trap focus in a div
 * Wrap FocusTrap around the components that need to trap focus.
 */
 interface FocusTrapProps {
	children: React.ReactNode;
    currentModalRef: HTMLDivElement | null;
}

const FocusTrap = ({ children, currentModalRef } : FocusTrapProps): JSX.Element => {
    const keyDownHandler = (e: KeyboardEvent) => {
        // only execute if tab is pressed
        if (e.key !== 'Tab') return;

        const focusableModalElements = currentModalRef?.querySelectorAll(
            'a[href], button:not([disabled]), textarea, input, select'
        );
        if (focusableModalElements) {
            const firstElement:any = focusableModalElements[0];
            const lastElement:any = focusableModalElements[focusableModalElements.length - 1];

        if (!e.shiftKey && document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
        }

        if (e.shiftKey && document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
        }
        }
    };

    return (
        <div role="dialog" onKeyDown={(e: any) => keyDownHandler(e)}>
            {children}
        </div>
    );
};

export default FocusTrap;
