import styled from 'styled-components';

/**
 * CardMenu displays the menu section for the setting cards.
 * It's an empty container, you can nest a NavMenu inside of it.
 */
const CardMenu = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #4E4E4E; // TODO: use theme secondary lighter
    color: #D1DCE5; // TODO: use theme light_text
    width: 25%;
    height: 100%;
    min-height: 500px;
    border-radius: 10px 0 0 10px;
    padding: 1em;
    font-size: 1.5em;
    font-weight: 500;
    @media screen and (max-width: 780px) {
        min-height: 516px;
	}
`;

export default CardMenu;
