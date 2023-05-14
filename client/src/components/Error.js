import React from "react";

const Error = (props) => {
    return <p className={`text-red-700`}>{props.children}</p>
};


export default Error;