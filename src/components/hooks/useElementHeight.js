import { useCallback, useState } from 'react';
import { getClientHeight } from './tools';

function useElementHeight() {
    const [height, setHeight] = useState(0);

    const ref = useCallback(
        (node) => {
            setHeight(getClientHeight(node));
        },
        [height]
    );

    return [height, ref];
}

export default useElementHeight;
