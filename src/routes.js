import React from 'react';
import { asyncComponent } from '@jaredpalmer/after';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Privacy from './pages/Privacy';

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
            loader: () => import('./pages/Paintings'), // required
            Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
        }),
    },
    {
        path: '/sculptures',
        exact: true,
        component: asyncComponent({
            loader: () => import('./pages/Sculptures'), // required
            Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
        }),
    },
    {
        path: '/dessins',
        exact: true,
        component: asyncComponent({
            loader: () => import('./pages/Drawings'), // required
            Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
        }),
    },
    {
        path: '/presentation',
        exact: true,
        component: asyncComponent({
            loader: () => import('./pages/About'), // required
            Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
        }),
    },
    {
        path: '/contact',
        exact: true,
        component: asyncComponent({
            loader: () => import('./pages/Contact'), // required
            Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
        }),
    },
    {
        path: '/Politique-de-confidentialite',
        exact: true,
        component: Privacy,
    },
    {
        component: NotFound,
    },
];
