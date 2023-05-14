import React, {useRef} from 'react';
import {Link} from "react-router-dom";

const LoginForm = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const loginFormHandler = (event) => {
        event.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        console.log(username, password);
    };
    return  <form onSubmit={loginFormHandler} className={`flex flex-col p-10 justify-start`}>
        <label className={`font-fontY font-semibold text-xl`} htmlFor={`username`}>Username / Email</label>
        <input type={`text`} className={`border border-gray-300 active: outline-none p-0.5 my-3 focus:border-black`} id={`username`} ref={usernameRef} />

        <label className={`font-fontY font-semibold text-xl`} htmlFor={`password`}>Password</label>
        <input type={'password'} className={`border border-gray-300 active: outline-none p-0.5 my-3 focus:border-black`} id={`password`} ref={passwordRef}/>
        <input type={`submit`} value={`Login`} className={`text-xl border border-black max-w-[100px] bg-primary text-white my-2 font-fontY`}/>
        <Link to={'/signup'} className={`text-blue-700 hover:text-blue-500 active:text-blue-950 font-fontY text-md`}>Don't have an Account? Signup Here</Link>
    </form>

};

export default LoginForm;