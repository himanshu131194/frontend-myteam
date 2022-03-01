import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    Navigate
} from "react-router-dom";
// import App from './App';
import {routes, RoutesType} from './Routes';
import UsersContainer from "./containers/UsersContainer";

interface Props { }

interface States { }


function PrivateOutlet(){
    const isAuthenticaed: boolean = true;
    return isAuthenticaed ? <Outlet/>: <Navigate to="/account/login" />
}



class MainRouter extends React.Component<Props, States> {
    render(): any {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<PrivateOutlet/>}>
                        <Route path={'users'} element={<UsersContainer/>}/>                      
                    </Route>
                    {routes.map((route: RoutesType)=>{
                        return <Route path={route.path} element={route.container} key={route.id}/>
                    })}
                </Routes>
            </BrowserRouter>
        );
    }
}

export default MainRouter;