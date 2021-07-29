import React from 'react';
import styled from 'styled-components';

const FooterContent = styled.div`
	background-color: #292929;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 189px;
	padding-right: 5rem;
	padding-left: 5rem;
	font-weight: bold;
	border-top: 1px solid #e5e5e5;
	position:absolute;
	bottom:0;
	width:calc(100% - 5rem - 5rem);
`;

const WrapperLeft = styled.div`
	color: #e5e5e5;
`;

const WrapperRight = styled.div`
	color: white;
`;

const Footer = (): JSX.Element => (
	<FooterContent data-testid="footer">
		<WrapperLeft>© 2021 Alpha Wilders - All Rights Reserved.</WrapperLeft>
		<WrapperRight>Terms of Service</WrapperRight>
	</FooterContent>
);

export default Footer;
