import React from 'react';
import Home from '../component/home/home';
import Model from '../component/model/index';
import Accessories from '../component/accessories/index';
import Cart from '../component/cart/index';
import Register from '../component/register';
import Detail from '../component/detail';



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
    },
    {
        path: "/cart",
        exact: false,
        main: (match, location) => <Cart></Cart>
    },

    {
        path: "/register",
        exact: false,
        main: (match, location) => <Register></Register>

    },
    {
        path: "/detail/:id/:name",
        exact: true,
        main: (match, location) => <Detail match={match}></Detail>
    }
]


export default router;