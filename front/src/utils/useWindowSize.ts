import React from 'react';

/** Defines a custom hook for building a responsive app depending on the
 * current window's size.
 *
 * @example
 * Sample use of display only when window is larger than 600px :
 * ```
 *  import useWindowSize from '../../../utils/useWindowSize';
 *  const { width } = useWindowSize();
 *
 *  return(
 *
 *      {width > 600 && (
            <text>Colors</text>
        )}
 *  )
 * ```
*/
export default function useWindowSize(): {
  [key: string]: number;
} {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  /// update window size on resizing
  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  React.useEffect(() => {
    window.addEventListener('resize', changeWindowSize);

    return () => {
      /// clean the listeners when component unmounts
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  return windowSize;
}
