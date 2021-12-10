import styled from 'styled-components';

/**
 * Build a simple row
 */
const Row = styled.div<{ gap?: string }>`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: ${(props) => (props.gap ? props.gap : '1em')};
`;

export default Row;
