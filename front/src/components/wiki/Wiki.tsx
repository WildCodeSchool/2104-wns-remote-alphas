import React from 'react';
import styled from 'styled-components';
import ComingSoon from '../core/ComingSoon';

const ContentWiki = styled.div`
    height: 79vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wiki = (): JSX.Element => (
    <ContentWiki>
        <ComingSoon />
    </ContentWiki>
);

export default Wiki;
