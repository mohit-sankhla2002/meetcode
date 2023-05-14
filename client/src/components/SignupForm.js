import React, {useRef, useState} from 'react';
import { Link } from "react-router-dom";
import Error from '../components/Error.js'
const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const passwordRef = useRef();
    const emailRef = useRef();
    const nameRef = useRef();

    const [passConfirm, setPassConfirm] = useState(true);
    const [isTouched, setIsTouched] = useState(false);
    const usernameInputHandler = (e) => {
        setUsername(e.target.value);
    };

    const confirmPassHandler = (e) => {
        setIsTouched(true);
        setConfirmPass(e.target.value);
    };

    const signupFormHandler = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (password !== confirmPass) {
            setPassConfirm(false);
            setIsTouched(false);
            return;
        }
        console.log(name, email, username, password);
    };

    const error = !isTouched && !passConfirm;

    return  <form onSubmit={signupFormHandler} className={`flex flex-col p-10 justify-start`}>

        <label className={`font-fontY font-semibold text-xl`} htmlFor={`name`}>Name</label>
        <input type={'text'} className={`border border-gray-400 active: outline-none p-0.5 my-3`} id={`name`} ref={nameRef}/>

        <label className={`font-fontY font-semibold text-xl`} htmlFor={`username`}>Username</label>
        <input type={`text`} className={`border border-gray-400 active: outline-none p-0.5 my-3`} id={`username`} onChange={usernameInputHandler} />

        <label className={`font-fontY font-semibold text-xl`} htmlFor={`email`}>Email</label>
        <input type={'email'} className={`border border-gray-400 active: outline-none p-0.5 my-3`} id={`email`} ref={emailRef}/>


        <label className={`font-fontY font-semibold text-xl`} htmlFor={`password`}>Password</label>
        <input type={'password'} className={`border border-gray-400 active: outline-none p-0.5 my-3`} id={`password`} ref={passwordRef}/>

        <label className={`font-fontY font-semibold text-xl ${error ? 'text-red-600' : ''}`} htmlFor={`confirmPass`}>Confirm Password</label>
        <input type={'password'} className={`border border-gray-400 active: outline-none p-0.5 my-3 ${error ? 'border-red-700' : ''}`} id={`confirmPass`} onChange={confirmPassHandler}/>
        {error && <Error>Passwords Don't Match! Try Again</Error>}


        <input type={`submit`} value={`Sign Up`} className={`text-xl border border-black max-w-[100px] font-fontY bg-primary text-white my-2`}/>
        <Link to={'/login'} className={`text-blue-700 hover:text-blue-500 active:text-blue-950 font-fontY text-md`}>Already Have an Account? Login</Link>
    </form>

};

export default SignupForm;