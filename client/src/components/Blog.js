import React from "react";
import { Link } from "react-router-dom";
import nature from '../assets/nature.jpeg'
const Blog = (props) => {

    return <Link to={`/blog/${props.id}`} className={`p-5 shadow-card rounded-3xl max-w-[300px]`}>
        <img src={nature} className={`rounded-3xl`} alt="images"/>
        <h2 className={`font-rubik`}>{props.title}</h2>
        <h4 className={`font-rubik`}>{props.shortDesc}</h4>
        <div className={`w-[100%] flex justify-between`}>
            <span className={`text-gray-500`}>{props.username}</span>
            <span className={`text-gray-700`}>{props.date}</span>
        </div>
    </Link>
}

export default Blog;