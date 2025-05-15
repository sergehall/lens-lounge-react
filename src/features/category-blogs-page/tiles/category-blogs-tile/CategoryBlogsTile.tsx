// src/features/category-blogs-page/tiles/public-author-blogs-bile/CategoryBlogsTile.tsx

import React from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../../../hooks/reduxHooks';
import BlogListRenderer from '../../BlogListRenderer';
import { makeSelectBlogsForCategory } from '../../selectors';

const CategoryBlogsTile: React.FC = () => {
  const { name = '' } = useParams<{ name: string }>();
  const decodedName = decodeURIComponent(name);
  const blogs = useAppSelector(makeSelectBlogsForCategory(decodedName));

  return <BlogListRenderer blogs={blogs} />;
};

export default CategoryBlogsTile;
