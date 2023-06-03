import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])
  useEffect(() => {
    setErrMessage('');
  }, [user, password]);

  const loginFormHandler = (e) => {
    e.preventDefault();
    if (userRef.current.value === '' && passwordRef.current.value === '') {
        return;
    }
    axios.post('http://localhost:8080/auth/login', {username: userRef.current.value, password: passwordRef.current.value}).then(
        (res) => {
            console.log(res.data);
            setSuccess(true);
        }
    ).catch((e) => {
        if (e.response.status === 404) {
          setErrMessage("User Not Found");
        } else if (e.response.status === 401) {
          setErrMessage("Authentication Failed");
        }
        console.log(e.message);
    });
    
  }

  return (
    <form
      onSubmit={loginFormHandler}
      className={`flex flex-col p-10 justify-start`}
    >
      {errMessage && <p className={`bg-red-400 px-2 py-2 font-fontY text-white`}>{errMessage}</p>}
      <label
        className={`font-fontY font-semibold text-xl`}
        htmlFor={`username`}
      >
        Username / Email
      </label>
      <input
        type={`text`}
        className={`border border-gray-300 active: outline-none p-0.5 my-3 focus:border-black`}
        id={`username`}
        ref={userRef}
        value={user}
        autoComplete="off"
        onChange={e => setUser(e.target.value)}
      />

      <label
        className={`font-fontY font-semibold text-xl`}
        htmlFor={`password`}
      >
        Password
      </label>
      <input
        type={"password"}
        className={`border border-gray-300 active: outline-none p-0.5 my-3 focus:border-black`}
        id={`password`}
        ref={passwordRef}
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <input
        type={`submit`}
        value={`Login`}
        className={`cursor-pointer text-xl border border-black max-w-[100px] bg-primary text-white my-2 font-fontY`}
      />
      <Link
        to={"/signup"}
        className={`text-blue-700 hover:text-blue-500 active:text-blue-950 font-fontY text-md`}
      >
        Don't have an Account? Signup Here
      </Link>
    </form>
  );
};

export default LoginForm;
