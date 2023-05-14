import React from "react";

const Card = (props) => {
    return <div className={`shadow-card rounded-3xl ${props.className}`}>{props.children}</div>
};

export default Card;