import styled from 'styled-components';

/**
 * Responsive positionning wrapper for no layout boxes (login / signup forms)
 */
 const Wrapper = styled.div`
 display: flex;
 margin: auto;
 height: 100vh;
 width: 80vw;
 @media all and (min-width: 1000px) {
     width: 40vw;
 }
`;

export default Wrapper;
