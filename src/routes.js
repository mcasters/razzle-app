import React from 'react';
import { asyncComponent } from '@jaredpalmer/after';

import Home from './components/Home';
import NotFound from './components/NotFound';

export default [
    // normal route
    {
        path: '/',
        exact: true,
        component: Home,
    },
    // codesplit route
    {
        path: '/peintures',
        exact: true,
        component: asyncComponent({
            loader: () => import('./components/Paintings'), // required
            Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
        }),
    },
    {
        path: '/sculptures',
        exact: true,
        component: asyncComponent({
            loader: () => import('./components/Sculptures'), // required
            Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
        }),
    },
    {
        path: '/dessins',
        exact: true,
        component: asyncComponent({
            loader: () => import('./components/Drawings'), // required
            Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
        }),
    },
    {
        path: '/presentation',
        exact: true,
        component: asyncComponent({
            loader: () => import('./components/About'), // required
            Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
        }),
    },
    {
        component: NotFound,
    },
];
