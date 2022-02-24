import { useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { keyDownHandler } from '../../utils/trapFocus';

interface Iprops {
  title: string;
  question: string;
  onConfirm(): void;
  onCancel(): void;
  confirmActionName: string;
}

// Animations KeyFrames
const modalAnimation = keyframes`
	from {
		transform: translate(0px, -400px);
	}
	to {
		transform: translate(0px, 0px);
	}
`;
const ReverseModal = keyframes`
from {
		transform: translate(0px,0px);
	}
	to {
		transform: translate(0px, -700px);
	}
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
`;

const ModalContent = styled.div<{ reverseModal?: boolean }>`
  background-color: #292929;
  width: 30%;
  height: 40%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  padding: 2.4rem;
  animation-name: ${modalAnimation};
  animation-duration: 0.5s;
  z-index: 30;
  ${(props) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    props.reverseModal &&
    css`
      animation-name: ${ReverseModal};
      animation-duration: 0.5s;
    `}
`;
const Title = styled.h2`
  color: white;
  font-size: ${(props) => props.theme.fontSize.m};
`;
const Text = styled.h3`
  height: 50%;
  display: flex;
  align-items: center;
  color: white;
  font-size: 16px;
  line-height: 2em;
`;
const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 30%;
  gap: 2em;
`;

const Button = styled.button<{ alert?: boolean }>`
  background-color: ${(props) =>
    props.alert ? '#ff2960' : props.theme.colors.secondary};
  cursor: pointer;
  width: 12rem;
  height: 3rem;
  border: 1px solid ${(props) => (props.alert ? '#ff2960' : props.theme.colors.secondary)};
  border-radius: 5px;
  color: white;
  font-weight: bold;
  padding: 10px;
`;

function ModalConfirmation({
  title,
  question,
  onConfirm,
  onCancel,
  confirmActionName,
}: Iprops): JSX.Element {
  const [reverseModal, setReverseModal] = useState(false);

  const modalRef = useRef<any>(null);
  const cancelRef = useRef<any>(null);

  document.body.classList.add('no-scroll');

  // const keyDownHandler = (e: KeyboardEvent) => {
  // 	// close dialog with esc key
  // 	if (e.key === 'Escape') {
  // 		setReverseModal(true);
  // 		setTimeout(() => {
  // 			onCancel();
  // 		}, 250);
  // 	}
  //     // trap focus only with tab key
  //     if (e.key !== 'Tab') return;

  //     const focusableModalElements = modalRef.current.querySelectorAll(
  //         'a[href], button:not([disabled]), textarea, input, select'
  //     );
  //     const firstElement:any = focusableModalElements[0];
  //     const lastElement:any = focusableModalElements[focusableModalElements.length - 1];

  //     if (!e.shiftKey && document.activeElement === lastElement) {
  //         firstElement.focus();
  //         e.preventDefault();
  //     }

  //     if (e.shiftKey && document.activeElement === firstElement) {
  //         lastElement.focus();
  //         e.preventDefault();
  //     }
  // };
  function onEscape() {
    setReverseModal(true);
    setTimeout(() => {
      onCancel();
    }, 250);
  }

  return (
    <>
      <Overlay
        onClick={() => {
          setReverseModal(true);
          setTimeout(() => {
            onCancel();
          }, 250);
        }}
        aria-hidden="true"
      />
      <ModalContent
        id="confirmDialog"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        reverseModal={reverseModal}
        onKeyDown={(event: any) => keyDownHandler(onEscape, event, modalRef)}>
        <Title>{title}</Title>
        <Text>{question}</Text>
        <WrapperButtons>
          <Button
            alert
            onClick={() => {
              onConfirm();
            }}
            type="button">
            {confirmActionName}
          </Button>
          <Button
            ref={cancelRef}
            id="cancelButton"
            onClick={() => {
              setReverseModal(true);
              setTimeout(() => {
                onCancel();
              }, 250);
            }}
            type="button">
            Cancel
          </Button>
        </WrapperButtons>
      </ModalContent>
    </>
  );
}

export default ModalConfirmation;
