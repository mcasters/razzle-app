const ITEM_CONST = {
    PAINTING: {
        KEY: 'PAINTING',
        TYPE: 'painting',
        IMAGE: {
            PATH_SM: '/paintings/sm/',
            PATH_MD: '/paintings/md/',
            PATH: '/paintings/',
            ALT_IMAGE: 'Peinture de Marion Casters',
        },
        TITLE: 'Peintures',
        YEARS: ['2017', '2018-a', '2018-b', '2019'],
        QUERIES: [
            '?part=0&year=2017',
            '?part=1&year=2018',
            '?part=2&year=2018',
            '?part=0&year=2019',
        ],
    },

    DRAWING: {
        KEY: 'DRAWING',
        TYPE: 'drawing',
        IMAGE: {
            PATH_SM: '/drawings/sm/',
            PATH_MD: '/drawings/md/',
            PATH: '/drawings/',
            ALT_IMAGE: 'Dessin de Marion Casters',
        },
        TITLE: 'Dessins',
    },

    SCULPTURE: {
        KEY: 'SCULPTURE',
        TYPE: 'sculpture',
        IMAGE: {
            PATH_SM: '/sculptures/sm/',
            PATH_MD: '/sculptures/md/',
            PATH: '/sculptures/',
            ALT_IMAGE: 'Sculpture de Marion Casters',
        },
        TITLE: 'Sculptures',
    },

    LG_SIZE: 'lg',
    MD_SIZE: 'md',
    SM_SIZE: 'sm',
    SM_PX: 384,
    MD_PX: 640,

    FORMAT_DATE: 'dd/MM/yyyy',

    LIBRARY_PATH: '/images',
};

export default ITEM_CONST;
