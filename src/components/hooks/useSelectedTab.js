import { useEffect, useState } from 'react';

function useSelectedTab(tabIndex) {
    const [tab, setTab] = useState(null);

    useEffect(() => {
        if (
            typeof window !== 'undefined' &&
            localStorage.getItem('indexTab') !== null
        )
            setTab(parseInt(localStorage.getItem('indexTab')));
    }, []);

    useEffect(() => {
        if (
            typeof window !== 'undefined' ||
            localStorage.getItem('indexTab') === null
        )
            localStorage.setItem('indexTab', tabIndex);
        setTab(tabIndex);
    }, [tabIndex]);

    return tab;
}

export default useSelectedTab;
