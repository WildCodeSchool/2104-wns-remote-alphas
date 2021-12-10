import React from 'react';
import styled from 'styled-components';

/**
 * Build an animated loader for loading states
 */
const LoaderImage = styled.img`
    width: 50px;
    height: 50px;
    margin: 0 auto;
    color: #fff;
    font-size: 10px;
`;

const Loader = (): JSX.Element => (
	<LoaderImage src="/assets/loader.svg" aria-label="Loading" />
);

export default Loader;
