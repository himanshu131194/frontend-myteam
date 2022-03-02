import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    Navigate
} from "react-router-dom";
import { routes, privateRoutes, RoutesType } from './Routes';

interface Props { }

interface States { }


function PrivateOutlet() {
    const isAuthenticaed: boolean = true;
    return isAuthenticaed ? <Outlet /> : <Navigate to="/account/login" />
}



class MainRouter extends React.Component<Props, States> {
    render(): any {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<PrivateOutlet />}>
                        {privateRoutes.map((route: RoutesType) => {
                            return <Route path={route.path} element={route.container} key={route.id} />
                        })}
                    </Route>
                    {routes.map((route: RoutesType) => {
                        return <Route path={route.path} element={route.container} key={route.id} />
                    })}
                </Routes>
            </BrowserRouter>
        );
    }
}

export default MainRouter;