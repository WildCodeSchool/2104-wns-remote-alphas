// FIXME: bug with focus on first opening in backoffice modal

// Get keyboard focusable elements
function getKeyboardFocusableElements(element = document): NodeListOf<HTMLElement> {
  return element.querySelectorAll(
    'a[href], button, input, textarea, select, details,[tabindex]',
  );
}

// Lock focusable elements (to trap focus inside the modal box)
function removeTabIndex(focusableElements: NodeListOf<HTMLElement>): void {
  focusableElements.forEach((element: { tabIndex: number }) => {
    element.tabIndex = -1;
  });
}

// Unlock focusable elements (to make it focusable when the modal is closed)
function restoreTabIndex(focusableElements: NodeListOf<HTMLElement>): void {
  focusableElements.forEach((element: { tabIndex: number }) => {
    element.tabIndex = 0;
  });
}

function keyDownHandler(
  onEscape: () => void,
  e: React.KeyboardEvent,
  modalRef: React.MutableRefObject<HTMLElement | null>,
): void {
  console.log(e.key);
  // close dialog with esc key
  if (e.key === 'Escape') {
    onEscape();
  }
  // trap focus only with tab key
  if (e.key !== 'Tab') return;

  // Keep focus inside the modal
  if (!modalRef.current) {
    return;
  }
  const focusableModalElements = modalRef.current.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), textarea, input, select, .react-colorful__interactive',
  );
  const firstElement = focusableModalElements[0];
  const lastElement = focusableModalElements[focusableModalElements.length - 1];

  if (!e.shiftKey && document.activeElement === lastElement) {
    firstElement.focus();
    e.preventDefault();
  }

  if (e.shiftKey && document.activeElement === firstElement) {
    lastElement.focus();
    e.preventDefault();
  }
}

export { getKeyboardFocusableElements, keyDownHandler, removeTabIndex, restoreTabIndex };
