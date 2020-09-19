import { useState } from 'react';

function useImageToZoom() {
    const [item, setItem] = useState(null);
    const [index, setIndex] = useState(null);

    const handleImageChange = (item, index) => {
        setItem(item);
        setIndex(index);
    };

    return [item, index, handleImageChange];
}

export default useImageToZoom;
