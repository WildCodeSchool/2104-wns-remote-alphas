/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */

// TODO: fix any
// Get keyboard focusable elements
function getKeyboardFocusableElements(element = document) {
    return element.querySelectorAll(
        'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
    );
}

// Lock focusable elements (to trap focus inside the modal box)
function removeTabIndex(focusableElements: any) {
    focusableElements.forEach((element: { tabIndex: number; }) => {
        console.log(element);
        element.tabIndex = -1;
    });
}

// Unlock focusable elements (to make it focusable when the modal is closed)
function restoreTabIndex(focusableElements: any) {
    focusableElements.forEach((element: { tabIndex: number; }) => {
        console.log(element);
        element.tabIndex = 0;
    });
}

function keyDownHandler(onEscape: any, e: KeyboardEvent, modalRef: any) {
    // close dialog with esc key
    if (e.key === 'Escape') {
        onEscape();
    }
    // trap focus only with tab key
    if (e.key !== 'Tab') return;

    // Keep focus inside the modal
    const focusableModalElements = modalRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select'
    );
    const firstElement: any = focusableModalElements[0];
    const lastElement: any = focusableModalElements[focusableModalElements.length - 1];

    if (!e.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
    }

    if (e.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
    }
}

export {
    getKeyboardFocusableElements, removeTabIndex, restoreTabIndex, keyDownHandler
};
