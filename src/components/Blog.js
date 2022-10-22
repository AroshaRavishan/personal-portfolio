import React from 'react';
import Article from '../components/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './Blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="National Institute Of Busines Management Student Club" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="UI Design For Artifical Inteligance" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Travel Full Responsive Web Application" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="Web Site for Learning Mangement System" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="UI Interface for Virtual Banking" />
      </div>
    </div>
  </div>
);

export default Blog;