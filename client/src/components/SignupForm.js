import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Error from "../components/Error.js";
import axios from "axios";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const passwordRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const [errMessage, setErrMessage] = useState("");
  const [passConfirm, setPassConfirm] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    nameRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMessage("");
  }, [username, password, email, passConfirm, name]);

  const usernameInputHandler = (e) => {
    setUsername(e.target.value);
  };

  const confirmPassHandler = (e) => {
    setIsTouched(true);
    setConfirmPass(e.target.value);
  };

  const signupFormHandler = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (password !== confirmPass) {
      setPassConfirm(false);
      setIsTouched(false);
      return;
    }

    await axios
      .post("http://localhost:8080/auth/signup", {
        name,
        username,
        password,
        email,
      })
      .then((res) => {
        console.log(res.data.message);
        setErrMessage('');
      })
      .catch((e) => {
        if (e.response.status === 403) {
            setErrMessage("User already Exists!");
            return;
        }
        setErrMessage("Something is Wrong!");
        console.log(e.message);
      });
  };

  const error = !isTouched && !passConfirm;

  return (
    <form
      onSubmit={signupFormHandler}
      className={`flex flex-col p-10 justify-start`}
    >
      {errMessage && (
        <p className={`bg-red-400 px-2 py-2 font-fontY text-white`}>
          {errMessage}
        </p>
      )}

      <label className={`font-fontY font-semibold text-xl`} htmlFor={`name`}>
        Name
      </label>
      <input
        type={"text"}
        className={`border border-gray-400 active: outline-none p-0.5 my-3`}
        id={`name`}
        ref={nameRef}
        onChange={e => setName(e.target.value)}
      />

      <label
        className={`font-fontY font-semibold text-xl`}
        htmlFor={`username`}
      >
        Username
      </label>
      <input
        type={`text`}
        className={`border border-gray-400 active: outline-none p-0.5 my-3`}
        id={`username`}
        onChange={usernameInputHandler}
      />

      <label className={`font-fontY font-semibold text-xl`} htmlFor={`email`}>
        Email
      </label>
      <input
        type={"email"}
        className={`border border-gray-400 active: outline-none p-0.5 my-3`}
        id={`email`}
        ref={emailRef}
        onChange={e => setEmail(e.target.value)}
      />

      <label
        className={`font-fontY font-semibold text-xl`}
        htmlFor={`password`}
      >
        Password
      </label>
      <input
        type={"password"}
        className={`border border-gray-400 active: outline-none p-0.5 my-3`}
        id={`password`}
        ref={passwordRef}
        onChange={e => setPassword(e.target.value)}
      />

      <label
        className={`font-fontY font-semibold text-xl ${
          error ? "text-red-600" : ""
        }`}
        htmlFor={`confirmPass`}
      >
        Confirm Password
      </label>
      <input
        type={"password"}
        className={`border border-gray-400 active: outline-none p-0.5 my-3 ${
          error ? "border-red-700" : ""
        }`}
        id={`confirmPass`}
        onChange={confirmPassHandler}
      />
      {error && <Error>Passwords Don't Match! Try Again</Error>}

      <input
        type={`submit`}
        value={`Sign Up`}
        className={`text-xl border border-black max-w-[100px] font-fontY bg-primary text-white my-2`}
      />
      <Link
        to={"/login"}
        className={`text-blue-700 hover:text-blue-500 active:text-blue-950 font-fontY text-md`}
      >
        Already Have an Account? Login
      </Link>
    </form>
  );
};

export default SignupForm;
