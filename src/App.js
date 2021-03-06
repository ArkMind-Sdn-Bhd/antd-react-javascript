import {useEffect, useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {DashboardView} from "./pages/Dashboard";
import {MainLayout} from "./layout";
import {LoginView} from "./pages/Login";

function App() {

    const [theme] = useState('PURPLE');

    useEffect(() => {
        if (theme === "DEFAULT") {
            require('./theme/default/defaultTheme.less')
        } else {
            require('./theme/purple/purpleTheme.less')
        }
    }, [theme]);

    return (
        <>
            <BrowserRouter>
                {
                    <Routes>
                        <Route path="/" element={<LoginView/>}/>
                        <Route path="/login" element={<LoginView/>}/>
                        <Route path="/" element={<MainLayout/>}>
                            <Route path="/dashboard" element={<DashboardView/>}/>
                        </Route>
                        <Route
                            path="*"
                            element={
                                <main style={{padding: "1rem"}}>
                                    <p>There's nothing here!</p>
                                </main>
                            }
                        />
                    </Routes>
                }
            </BrowserRouter>
        </>
    );
}

export default App;
