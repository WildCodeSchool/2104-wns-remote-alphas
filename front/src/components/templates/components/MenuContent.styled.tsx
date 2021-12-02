import styled from 'styled-components';

const MenuContent = styled.nav`
	display: flex;
	justify-content: space-around;
	align-items: center;
	list-style: none;
	width: ${(props) => props.style?.width || '700px'};
	height: 41px;
	font-weight: bold;
`;

export default MenuContent;
