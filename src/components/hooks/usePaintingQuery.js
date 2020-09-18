import { useEffect, useState } from 'react';

function usePaintingQuery(initialQuery) {
    const [query, setQuery] = useState(null);

    useEffect(() => {
        if (
            typeof window !== 'undefined' &&
            localStorage.getItem('paintingQuery') !== null
        )
            setQuery(localStorage.getItem('paintingQuery'));
    }, []);

    useEffect(() => {
        if (
            typeof window !== 'undefined' ||
            localStorage.getItem('paintingQuery') === null
        )
            localStorage.setItem('paintingQuery', initialQuery);
        setQuery(initialQuery);
    }, [initialQuery]);

    return query;
}

export default usePaintingQuery;
