import React from 'react';
import useWindowSize from '../../../utils/useWindowSize';

const Colors = (): JSX.Element => {
    const { width } = useWindowSize();

    return (
        <>
            {width > 500 && (
                <text>Colors</text>
            )}
            {width < 500 && (<text>Too small</text>)}
        </>
    );
};

export default Colors;
