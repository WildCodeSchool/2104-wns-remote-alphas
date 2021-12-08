import React from 'react';
import styled from 'styled-components';
import ComingSoon from '../core/ComingSoon';

const ContentHelp = styled.div`
    height: calc(100vh - 113px - 105px);
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
