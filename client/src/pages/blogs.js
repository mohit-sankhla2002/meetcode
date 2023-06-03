import React from 'react';
import Blog from "../components/Blog";
import blogs from "../constants/blogs";
export default function Blogs() {
    return <React.Fragment>
        <ul className={`flex flex-row flex-wrap justify-center gap-10 p-10 m-5 border-2 border-gray-600 shadow-xl rounded-3xl`}>
            {blogs.map((blog) => (
                <Blog key={blog.id} id={blog.id} title={blog.title} shortDesc={blog.description} date={blog.date} username={blog.user} content={blog.content}/>
            ))}
        </ul>
    </React.Fragment>
}