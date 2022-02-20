/* eslint-disable no-confusing-arrow */
/* eslint-disable object-curly-newline */
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import ColorLuminance from '../../utils/colorLuminance';
import Tabable from '../core/accessibility/Tabable.Styled';
import LargeDivider from '../core/LargeDivider.styled';

/**
 * Builds a responsive footer with a neumorphic divider on top
 */
const FooterContainer = styled.footer`
	display: none;
	@media (min-width: 350px) {
		display: block;
	}
`;

const FooterContent = styled.div`
	background-color: ${(props) => props.theme.colors.primary};
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: ${(props) => props.theme.fixedSize.footer.height};
	padding-right: ${(props) => props.theme.fixedSize.footer.padding};
	padding-left: ${(props) => props.theme.fixedSize.footer.padding};
	font-weight: bold;
	width: ${(props) => props.theme.fixedSize.footer.width};
	position: absolute;
	bottom: 0;
	position: relative;
`;

const Wrapper = styled.div`
	color: ${(props) => props.theme.colors.textColor};
	font-size: 10px;
	@media (min-width: 580px) {
		font-size: 14px;
	}
`;

const Image = styled.img`
	width: 100px;
	position: absolute;
	bottom: 100px;
	right: 100px;
	cursor: pointer;
`;

const Timer = styled.div<{ visible?: boolean }>`
	visibility: ${(props) => props.visible ? 'visible' : 'hidden'};
`;

// TODO: make a clickable link and create view for terms of services.
const Footer = (): JSX.Element => {
	/// Compute shadows colors from current primary theme color
	const theme = useContext(ThemeContext);
	const primaryColor = theme.colors.primary;
	const lightShadow = ColorLuminance(primaryColor, -0.5);
	const darkShadow = ColorLuminance(primaryColor, +0.5);

	const [pandaVisible, setPandaVisibility] = useState(false);

	useEffect(() => {
		// Show panda every 2 hours
		const timer = setInterval(() => {
			console.log('This will pop every 2 hours');
			setPandaVisibility(true);
			// Hide panda after 5 minutes
			setTimeout(() => { setPandaVisibility(false); }, 300000);
		}, 12000); //	7200000
		return () => clearInterval(timer);
	}, []);

	return (
		<FooterContainer>
			<Timer visible={pandaVisible}>
				<Tabable
					onClick={() => {
						console.log('clicked !');
						setPandaVisibility(false);
					}}
					pressedKey="Enter"
					onKeyPress={() => {
						console.log('key pressed !');
						setPandaVisibility(false);
					}}
				>
					<Image src="/assets/images/133706.png" alt="open panda tips" />
				</Tabable>
			</Timer>
			<LargeDivider light={lightShadow} dark={darkShadow} />
			<FooterContent data-testid="footer">
				<Wrapper>© 2021 Alpha Wilders - All Rights Reserved.</Wrapper>
				<Wrapper>Terms of Service</Wrapper>
			</FooterContent>
		</FooterContainer>
	);
};

export default Footer;
