import styled from 'styled-components';

/**
 * Divider displays a custom rectangle with neumorphic design (skew)
 */
const LargeDivider = styled.div`
    width: 100%;
    height: 15px;
    background: ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => props.theme.neumorphism.boxShadow};
`;

export default LargeDivider;
