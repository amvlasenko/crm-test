import {BrowserRouter} from 'react-router-dom';
import React from 'react';

// eslint-disable-next-line react/display-name
export const withRouter = (component: () => React.ReactNode) => () => (
    <BrowserRouter basename="/crm-test">
        {component()}
    </BrowserRouter>
);