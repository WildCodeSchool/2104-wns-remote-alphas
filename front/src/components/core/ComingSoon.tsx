import React from 'react';
import styled from 'styled-components';

const ContentSoon = styled.div`
    padding: 2em;
	background-color: ${(props) => props.theme.colors.opposite};
    box-shadow: 10px 10px 13px 0px rgba(0,0,0,0.75);
    border-radius: 10px;
    display: flex;
    width: 40vw;
    max-width: 600px;
    min-width: 180px;
    height: 45vh;
    flex-wrap: wrap;
    gap: 1em;
    align-items: center;
`;

const Image = styled.img`
    margin: auto;
    width: 35%;
    max-width: 250px;
    min-width: 140px;
`;

const Text = styled.p`
    @media (min-width: 450px) {
        font-size: 52px;
    }
    font-size: 46px;
    font-weight: bold;
    text-align: center;
    color: ${(props) => props.theme.colors.altTextColor};
`;

const ComingSoon = (): JSX.Element => (
    <ContentSoon>
        <Image src="assets/images/running_panda.png" alt="illustration of panda is running" />
        <Text>
            Coming Soon !
        </Text>
    </ContentSoon>
);

export default ComingSoon;
