// src/features/category-blogs-page/tiles/public-author-blogs-bile/CategoryBlogsTile.tsx

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppSelector } from '../../../../hooks/reduxHooks';
import { RouteManager } from '../../../../routes/utils/routeManager';
import BlogListRenderer from '../../BlogListRenderer';
import { makeSelectBlogsForCategory } from '../../selectors';
import * as S from './categoryBlogsTile.styles';

const CategoryBlogsTile: React.FC = () => {
  const navigate = useNavigate();
  const { name = '' } = useParams<{ name: string }>();
  const decodedName = decodeURIComponent(name);
  const blogs = useAppSelector(makeSelectBlogsForCategory(decodedName));

  if (blogs.length === 0) {
    return (
      <S.BackButton onClick={() => navigate(RouteManager.getHomeRoot())}>
        <span>← No blogs found for this category. Back to home</span>
      </S.BackButton>
    );
  }
  return <BlogListRenderer blogs={blogs} />;
};

export default CategoryBlogsTile;
