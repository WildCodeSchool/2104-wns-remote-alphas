import styled from 'styled-components';

/**
 * Display a simple icon with a hover effect (themed colors)
 */
const Icon = styled.svg`
    width: 30px;
    height: 30px;
    >* {
        fill: ${(props) => props.theme.colors.textColor};
    }
    &:hover >* {
        fill: ${(props) => props.theme.colors.secondary};
        transition: 0.1s color ease-out;
    }
`;

export default Icon;
