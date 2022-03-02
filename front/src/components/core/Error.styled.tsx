import React from 'react';
import styled from 'styled-components';

/**
 * Build an error component with an optionnal message (or default will be applied)
 * and an illustration.
 */
const ErrorContainer = styled.div`
  height: 80vh;
  width: 100v;
  padding: 2em;
  font-size: 32px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

interface ErrorProps {
  message?: string;
}

const Error = ({ message }: ErrorProps): JSX.Element => (
  <ErrorContainer>
    {message}
    <img src="/assets/images/panda_error.png" alt="" />
  </ErrorContainer>
);

// Set default props types
Error.defaultProps = {
  message: 'Oupsy ! An error occured... try again ?',
};

export default Error;
