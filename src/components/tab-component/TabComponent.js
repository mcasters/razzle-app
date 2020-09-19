import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';
import TabContent from './TabContent';
import ZoomContent from '../zoom-content/ZoomContent';
import useImageToZoom from '../hooks/useImageToZoom';

const TabComponent = ({ list, query }) => {
    // const [selectedImage, setSelectedImage] = useState(null);
    //
    // const handleImageChange = (image) => {
    //     setSelectedImage(image);
    // };
    const [item, index, handleImageChange] = useImageToZoom();

    return (
        <>
            <TabContent
                list={list}
                query={query}
                handleImageChange={handleImageChange}
            />
            <ZoomContent selectedItem={item} imageIndex={index}>
                <Tab selectedQuery={query} />
            </ZoomContent>
        </>
    );
};

TabComponent.propTypes = {
    list: PropTypes.array,
    query: PropTypes.string,
};

export default TabComponent;
