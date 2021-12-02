import styled from 'styled-components';

/**
 * Card displays a custom <section> with rounded corners and themed styles
 */
const Card = styled.section`
    background-color: #ECEFF1; // TODO: use theme background_light
    color: #292929; // TODO: use theme secondary
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72vh;
    width: 80%;
    min-height: 500px;
    border-radius: 10px;
    margin: auto;
    margin-bottom: 2em;
    margin-top: 2em;
`;

export default Card;
