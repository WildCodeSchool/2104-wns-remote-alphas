import styled from 'styled-components';

/**
 * Card displays a custom <section> with rounded corners and themed styles
 */
const Card = styled.section`
    background-color: ${(props) => props.theme.colors.opposite};
    color: ${(props) => props.theme.colors.altTextColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    min-height: 500px;
    border-radius: 10px;
    margin: auto;
    margin-bottom: 2em;
    margin-top: 2em;
`;

export default Card;
