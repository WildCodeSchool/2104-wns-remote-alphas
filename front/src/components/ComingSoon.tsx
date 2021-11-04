import React from 'react';
import styled from 'styled-components';

const ContentSoon = styled.div`
    padding: 75px 129px 75px 144px;
	background-color: #ECEFF1;
    border-radius: 10px;
    display: flex;
`;

const Image = styled.div`
    margin: auto;
    margin-right: 94px;
`;

const Text = styled.p`
    font-size: 72px;
    font-weight: bold;
`;

const ComingSoon = (): JSX.Element => (
    <ContentSoon>
        <Image>
            <img src="assets/images/running_panda.png" alt="illustration of panda is running" />
        </Image>
        <Text>
            <p>Coming Soon !</p>
        </Text>
    </ContentSoon>
);

export default ComingSoon;
