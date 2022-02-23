import styled from 'styled-components';

/**
 * Skip link, visible only for keyboard nav and screen readers.
 * Skip nav and goes to main content anchor
 */
 const SkipLink = styled.a`
    z-index: 9999;
	transform: translateY(calc(-100% - 1rem));
	display: block;
	position: absolute;
	left: -1.5rem;	top: -1.5rem;
	height: 60px; width: 60px;
	
	:focus {	
		transform: translateY(0);
        transition: all 300ms ease-in-out;
	}

    background: ${(props) => props.theme.colors.secondary};
	padding: 2rem;
	border-radius: 100%;
	color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
	text-decoration: none;
	font-family: $serif;
`;

export default SkipLink;
