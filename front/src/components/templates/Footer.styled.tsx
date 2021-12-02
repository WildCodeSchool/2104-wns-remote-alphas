import React from 'react';
import styled from 'styled-components';
import LargeDivider from '../core/LargeDivider.styled';

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

const WrapperLeft = styled.div`
	color: ${(props) => props.theme.colors.textColor};
`;

const WrapperRight = styled.div`
	color: ${(props) => props.theme.colors.textColor};
`;

const Footer = (): JSX.Element => (
	<>
		<LargeDivider />
		<FooterContent data-testid="footer">
			<WrapperLeft>© 2021 Alpha Wilders - All Rights Reserved.</WrapperLeft>
			<WrapperRight>Terms of Service</WrapperRight>
		</FooterContent>
	</>
);

export default Footer;
