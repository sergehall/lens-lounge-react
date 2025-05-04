import React from 'react';

import { BlogPreview } from '../../types/blogs.types';

import { BlogTile, Content } from './blogsTile.styles';

interface BlogsTileProps {
  blogs: BlogPreview[];
}

const BlogsTile: React.FC<BlogsTileProps> = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <BlogTile key={blog.id}>
          <img src={blog.imageUrl} alt={blog.title} />
          <Content>
            <h4>{blog.title}</h4>
            <p>{blog.summary}</p>
            <span>Last posted: {blog.lastPosted}</span>
          </Content>
        </BlogTile>
      ))}
    </>
  );
};

export default BlogsTile;
