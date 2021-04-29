import styled from 'styled-components';

const CardMenu = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #4E4E4E; // todo: use theme secondary lighter
    color: #D1DCE5; // todo: use theme light_text
    width: 25%;
    height: 100%;
    min-height: 500px;
    border-radius: 10px 0 0 10px;
    padding: 1em;
    font-size: 1.5em;
    font-weight: 500;
`;

export default CardMenu;
