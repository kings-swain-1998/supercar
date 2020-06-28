import React from 'react';
import Home from '../component/home/home';
import Model from '../component/model/index';
import Accessories from '../component/accessories/index';




const router = [
    {
        path: "/",
        exact: true,
        main: () => <Home></Home>
    },
    {
        path: "/model/:id",
        exact: false,
        main: (match, location) => <Model match={match} location={location}></Model>
    },
    {
        path: "/accessories/:name",
        exact: false,
        main: (match, location) => <Accessories match={match} location={location}></Accessories>
    }
]


export default router;