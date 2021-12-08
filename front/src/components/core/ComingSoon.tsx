import React from 'react';
import styled from 'styled-components';

const ContentSoon = styled.div`
    padding: 75px 129px 75px 144px;
	background-color: #ECEFF1;
    box-shadow: 10px 10px 13px 0px rgba(0,0,0,0.75);
    border-radius: 10px;
    display: flex;
    @media screen and (max-width: 780px) {
		padding: 3%;
	}
`;

const Image = styled.div`
    margin: auto;
    margin-right: 94px;
    @media screen and (max-width: 780px) {
        margin: auto;
        width: 40%;
	}
`;

const PandaRun = styled.img`
    width: 100%;
`;

const Text = styled.p`
    font-size: 72px;
    font-weight: bold;
    @media screen and (max-width: 780px) {
		font-size: 20px;
	}
`;

const ComingSoon = (): JSX.Element => (
    <ContentSoon>
        <Image>
            <PandaRun src="assets/images/running_panda.png" alt="illustration of panda is running" />
        </Image>
        <Text>
            <p>Coming Soon !</p>
        </Text>
    </ContentSoon>
);

export default ComingSoon;
