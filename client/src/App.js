import React from "react";
import {Routes, Route} from 'react-router-dom'
import Blogs from "./pages/blogs";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/SignupPage";
import Layout from "./Layout";
import BlogPage from "./components/BlogPage";
import ProblemPage from "./pages/problems";
import ProblemFull from "./components/ProblemPage";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Blogs />} />
                <Route path={`/problems`} element={<ProblemPage />} />
                <Route path={`/login`} element={<LoginPage />} />
                <Route path={`/signup`} element={<SignupPage /> } />
                <Route path={`/blog/:blogId`} element={<BlogPage />} />
                <Route path={`/problem/:problemId`} element={<ProblemFull/>} />
            </Route>
        </Routes>
    );
}
export default App;
