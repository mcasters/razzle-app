import { useState } from 'react';

function useImageToZoom() {
    const [imageToZoom, setImageToZoom] = useState('');

    const setSrc = (src) => {
        setImageToZoom(src);
    };

    return { imageToZoom, setSrc: setSrc };
}

export default useImageToZoom;
