import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
// import App from './App';
import {routes, RoutesType} from './Routes';

interface Props { }

interface States { }

class MainRouter extends React.Component<Props, States> {
    render(): any {
        return (
            <BrowserRouter>
                <Routes>
                    {routes.map((route: RoutesType)=>{
                        return <Route path={route.path} element={route.container} key={route.id}/>
                    })}
                </Routes>
            </BrowserRouter>
        );
    }
}

export default MainRouter;