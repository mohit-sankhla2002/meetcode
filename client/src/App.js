import React from "react";
import {Routes, Route} from 'react-router-dom'
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/SignupPage";
import Layout from "./Layout";
function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<IndexPage />} />
                <Route path={`/login`} element={<LoginPage />} />
                <Route path={`/signup`} element={<SignupPage /> } />
            </Route>
        </Routes>
    );
}

export default App;
