import React from 'react';

// TODO: fix any
interface WrapperProps {
  condition: boolean;
  wrapper(children: React.ReactElement): React.ReactElement;

  children: React.ReactElement;
}

/**
 * Conditionaly wrap some children in another component
 * @param condition is the bool condition to wrap or not the children
 * @param wrapper is the wrapper element
 * @param children are the inside elements you need to conditionnally wrap
 */
const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: WrapperProps): JSX.Element => (condition ? wrapper(children) : children);

export default ConditionalWrapper;
