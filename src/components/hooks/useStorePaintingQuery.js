import { useEffect } from 'react';

function useStorePaintingQuery(query) {
    useEffect(() => {
        if (typeof window !== 'undefined')
            localStorage.setItem('paintingQuery', query);
    }, [query]);
}

export default useStorePaintingQuery;
