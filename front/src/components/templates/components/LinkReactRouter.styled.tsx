import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkReactRouter = styled(Link)`
text-decoration: none;
color: ${(props) => props.theme.colors.textColor};
cursor: pointer;
&:hover {
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: underline;
}
&:focus {
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: underline;
    outline: none;
}
`;

export default LinkReactRouter;
