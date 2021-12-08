import React from 'react';
import styled from 'styled-components';
import ComingSoon from '../core/ComingSoon';

const ContentHelp = styled.div`
    height: calc(100vh - 113px - 105px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.primary};
    @media screen and (max-width: 780px) {
		padding: 0% 10% 0% 10%;
	}
`;

const Help = (): JSX.Element => (
    <ContentHelp>
        <ComingSoon />
    </ContentHelp>
);

export default Help;
