import React from 'react'
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { useParams } from 'react-router-dom';
import blogs from '../constants/blogs';
import NotFound from '../pages/404';
const BlogPage = (props) => {
    const {blogId} = useParams();
    const blog = blogs.find((blog) => blog.id === +blogId);
    console.log(blog);
    if (blog) {
        const mdContent = blog.content;
        return (
          <div className={`p-10`}>
            <ReactMarkdown plugins={[gfm]} children={mdContent} />
          </div>
        );
    } else {
        return (<NotFound />);
    }
    
}

export default BlogPage;