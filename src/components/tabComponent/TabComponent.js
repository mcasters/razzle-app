import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';
import TabContent from './TabContent';

const TabComponent = ({ list, query }) => {
    return (
        <>
            <Tab selectedQuery={query} />
            <TabContent list={list} query={query} />
        </>
    );
};

TabComponent.propTypes = {
    list: PropTypes.array,
    query: PropTypes.string,
};

export default TabComponent;
