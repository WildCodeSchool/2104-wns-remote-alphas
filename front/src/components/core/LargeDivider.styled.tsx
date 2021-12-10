import styled from 'styled-components';

/**
 * Divider displays a custom rectangle with neumorphic design (skew)
 */
const LargeDivider = styled.div<{ light: string, dark: string }>`
    width: 100%;
    height: 15px;
    background: ${(props) => props.theme.colors.primary};
    // box-shadow: ${(props) => props.theme.neumorphism.boxShadow};
    box-shadow: inset 8px 8px 8px ${(props) => props.light}, inset -8px -8px 8px ${(props) => props.dark};
`;

export default LargeDivider;
