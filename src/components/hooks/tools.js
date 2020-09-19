const canUseDOM = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

export const getScrollY = () =>
    canUseDOM ? window.scrollY || window.pageYOffset : 0;
