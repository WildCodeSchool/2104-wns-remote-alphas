/* eslint-disable no-confusing-arrow */
/* eslint-disable max-len */

// TODO: fix any
interface WrapperProps {
    condition: boolean;
    wrapper: any;
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
}

/**
 * Conditionaly wrap some children in another component
 * @param condition is the bool condition to wrap or not the children
 * @param wrapper is the wrapper element
 * @param children are the inside elements you need to conditionnally wrap
 */
const ConditionalWrapper = (
    { condition, wrapper, children }: WrapperProps
) => condition ? wrapper(children) : children;

export default ConditionalWrapper;
