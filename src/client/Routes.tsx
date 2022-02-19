import React from 'react';
import AccountsContainer from './containers/AccountsContainer';

export type RoutesType = {
    id: number,
    path: string,
    container: JSX.Element
}

export const routes:[RoutesType] = [
    {
        id: 1,
        path: '/account/*',
        container: <AccountsContainer/>
    }
];
