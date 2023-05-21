import {Route, Routes} from 'react-router-dom';
import {NewsPage} from '@pages/news';
import {ErrorPage} from '@pages/error';
import {AddressPage} from '@pages/address';

export const routes = [
    {
        path: '/',
        element: <NewsPage/>,
    },
    {
        path: '*',
        element: <NewsPage/>,
    },
    {
        path: '/address',
        element: <AddressPage/>,
    },
];

export const Routing = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route
                    element={route.element}
                    path={route.path}
                    key={route.path}
                />
            )}
        </Routes>
    );
};