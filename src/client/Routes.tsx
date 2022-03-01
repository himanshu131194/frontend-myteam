import React from 'react';
import AccountsContainer from './containers/AccountsContainer';
import CampaignContainer from './containers/CampaignContainer';
import HeaderContainer from './containers/HeaderContainer';


export type RoutesType = {
    id: number,
    path: string,
    container: JSX.Element
}

const addHeaderWapper = (Component)=>{
    return <><HeaderContainer/><Component/></>
}

export const routes:[RoutesType] = [
    {
        id: 1,
        path: '/account/*',
        container: <AccountsContainer/>
    }
];


export const privateRoutes:[RoutesType] = [
    {
        id: 1,
        path: '/campaign/*',
        container: addHeaderWapper(CampaignContainer)
    }
];