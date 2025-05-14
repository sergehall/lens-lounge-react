// src/features/category-blogs-page/tiles/blogs-tile/BlogsTile.tsx

import React from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../../../hooks/reduxHooks';
import { makeSelectBlogsForCategory } from '../../selectors';

import * as S from './blogsTile.styles';

const BlogsTileComponent: React.FC = () => {
  const { name = '' } = useParams<{ name: string }>();
  const decodedName = decodeURIComponent(name);

  const blogs = useAppSelector(makeSelectBlogsForCategory(decodedName));

  if (blogs.length === 0) {
    return <div>No blogs found for this category.</div>;
  }

  return (
    <>
      {blogs.map((blog) => {
        return (
          <S.BlogTile key={blog.id}>
            <img src={blog.imageUrl} alt={blog.title} />
            <S.Content>
              <h4>{blog.title}</h4>
              <p>{blog.summary}</p>
              <span>Last posted: {blog.lastPosted}</span>
            </S.Content>
          </S.BlogTile>
        );
      })}
    </>
  );
};

const BlogsTile = React.memo(BlogsTileComponent);
export default BlogsTile;
