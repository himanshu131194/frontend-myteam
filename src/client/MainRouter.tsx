import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from './App';
import Login from "./components/Account/Login";
import Signup from "./components/Account/Signup";

interface Props { }

interface States { }

class MainRouter extends React.Component<Props, States> {
    render(): any {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default MainRouter;