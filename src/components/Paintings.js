import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import { PAINTING_URL } from '../data/api/urls';
import useStorePaintingQuery from './hooks/useStorePaintingQuery';
import TabComponent from './tab-component/TabComponent';

const Paintings = ({ list, query }) => {
    useStorePaintingQuery(query);

    return <TabComponent list={list} query={query} />;
};

Paintings.getInitialProps = async ({ req, location }) => {
    const defaultApiQuery = '?part=0&year=2017';

    let apiQuery;
    if (typeof window !== 'undefined') {
        if (location.search === '') {
            const storedApiQuery = localStorage.getItem('paintingQuery');
            apiQuery = storedApiQuery !== '' ? storedApiQuery : defaultApiQuery;
        } else apiQuery = location.search;
    } else {
        apiQuery = req.url.split('/peintures')[1];
        if (apiQuery === '') apiQuery = defaultApiQuery;
    }

    try {
        const res = await fetch(`${PAINTING_URL}${apiQuery}`);
        const list = await res.json();
        return { list, query: apiQuery };
    } catch (error) {
        if (error.response.status === 404) return { statusCode: 404 };
        return { error };
    }
};

Paintings.propTypes = {
    list: PropTypes.array,
    query: PropTypes.string,
};

export default Paintings;
