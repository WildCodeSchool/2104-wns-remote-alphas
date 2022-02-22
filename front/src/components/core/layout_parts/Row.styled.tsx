import styled, { css } from 'styled-components';

/**
 * Build a simple row
 * @param gap - set the row items gap
 * @param wrap - set flex-wrap on "wrap"
 */
const Row = styled.div<{ gap?: string, wrap?: boolean }>`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: ${(props) => (props.gap ? props.gap : '1em')};
	${(props) => (props.wrap && css`
        flex-wrap: wrap;`
    )};
`;

export default Row;
