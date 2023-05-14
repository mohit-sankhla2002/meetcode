import React from 'react';

const Button = (props) => {
    return <button className={`${props.className} text-xl border border-black px-4 py-2 bg-primary text-white my-2 font-fontY`}>{props.children}</button>
};

export default Button;