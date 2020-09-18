import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import { Link } from 'react-router-dom';

import ITEM_CONST from '../constants/itemConstant';
import Item from '../data/model/Item';
import ItemComponent from './item/ItemComponent';
import { PAINTING_URL } from '../data/api/urls';
import useQuery from './hooks/useQuery';
import useStorePaintingQuery from './hooks/useStorePaintingQuery';
import s from './paintings.css';

const paintingQueries = [
    '?part=0&year=2017',
    '?part=1&year=2018',
    '?part=2&year=2018',
    '?part=0&year=2019',
];

const Paintings = ({ list, location }) => {
    let query = useQuery();
    useStorePaintingQuery(location?.search);

    return (
        <>
            <ul>
                {paintingQueries.map((q) => {
                    const url = `/peintures${q}`;
                    const isSelected = location?.search === q;
                    return (
                        <li
                            key={q}
                            className={`${s.tab} ${
                                isSelected ? s.selected : ''
                            }`}
                        >
                            <Link to={url}>{query.get('year')}</Link>
                        </li>
                    );
                })}
            </ul>
            <h1>{query.get('year')}</h1>
            {list.map((row) => {
                const item = new Item(row, ITEM_CONST.PAINTING.KEY);
                return <ItemComponent key={row.id} item={item} />;
            })}
        </>
    );
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
        return { list, location };
    } catch (error) {
        if (error.response.status === 404) return { statusCode: 404 };
        return { error };
    }
};

Paintings.propTypes = {
    list: PropTypes.array,
    location: PropTypes.object,
};

export default Paintings;
