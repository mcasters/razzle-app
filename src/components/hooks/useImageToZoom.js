import { useState } from 'react';

function useImageToZoom() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (image) => {
        setSelectedImage(image);
    };

    return [selectedImage, handleImageChange];
}

export default useImageToZoom;
