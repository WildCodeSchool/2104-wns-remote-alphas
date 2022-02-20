import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import ColorLuminance from '../../utils/colorLuminance';
import LargeDivider from '../core/LargeDivider.styled';
import PandaTips from './PandaTips.styled';

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

// TODO: make a clickable link and create view for terms of services.
const Footer = (): JSX.Element => {
	/// Compute shadows colors from current primary theme color
	const theme = useContext(ThemeContext);
	const primaryColor = theme.colors.primary;
	const lightShadow = ColorLuminance(primaryColor, -0.5);
	const darkShadow = ColorLuminance(primaryColor, +0.5);

	return (
		<FooterContainer>
			<PandaTips />
			<LargeDivider light={lightShadow} dark={darkShadow} />
			<FooterContent data-testid="footer">
				<Wrapper>© 2021 Alpha Wilders - All Rights Reserved.</Wrapper>
				<Wrapper>Terms of Service</Wrapper>
			</FooterContent>
		</FooterContainer>
	);
};

export default Footer;
