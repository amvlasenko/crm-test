import App from '@app/index';
import {AddressPage} from '@pages/address';
import {createBrowserRouter} from '~react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    {
        path: '/address',
        element: <AddressPage/>,
    },
]);