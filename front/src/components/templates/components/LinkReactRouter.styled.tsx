import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkReactRouter = styled(Link)`
text-decoration: none;
color: white;
cursor: pointer;
&:hover {
    color: #68d0fc;
    text-decoration: underline;
}
&:focus {
    color: #68d0fc;
    text-decoration: underline;
    outline: none;
}
`;

export default LinkReactRouter;
