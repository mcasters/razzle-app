import { useEffect } from 'react';

function useStorePaintingQuery(query) {
    useEffect(() => {
        if (
            typeof window !== 'undefined' ||
            localStorage.getItem('paintingQuery') === null
        )
            localStorage.setItem('paintingQuery', query);
    }, [query]);
}

export default useStorePaintingQuery;
