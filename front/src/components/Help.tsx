import React from 'react';
import styled from 'styled-components';
import ComingSoon from './ComingSoon';

const ContentHelp = styled.div`
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Help = (): JSX.Element => (
    <ContentHelp>
        <ComingSoon />
    </ContentHelp>
);

export default Help;
