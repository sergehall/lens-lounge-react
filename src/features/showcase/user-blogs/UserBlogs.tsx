// src/features/showcase/user-blogs/UserBlogs.tsx
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../../hooks/reduxHooks';
import { Wrapper, Grid } from '../../category-blogs-page/categoryBlogsPage.styles';
import IntroCommunitiesTile from '../../category-blogs-page/tiles/intro-tile/IntroCommunitiesTile';
import BlogsTile from '../../category-blogs-page/tiles/blogs-tile/BlogsTile';
import CreateBlogCTATile from '../../category-blogs-page/tiles/create-blog-tile/CreateBlogCTATile';
import { selectProfile } from '../../auth/authSlice';

import { getUserBlogsByCategory } from './mocks/getUserBlogsByCategory';
import { CategoryNotFound } from './UserBlogs.styles';

const UserBlogs: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const decodedName = decodeURIComponent(name || '');

  const profile = useAppSelector(selectProfile);

  const userBlogsByCategory = useMemo(() => {
    if (!profile || !profile.username) {
      return {};
    }
    return getUserBlogsByCategory(profile.username);
  }, [profile]);

  const blogs = userBlogsByCategory[decodedName] || [];

  if (!name) {
    return <CategoryNotFound>Category not found</CategoryNotFound>;
  }

  if (!blogs.length) {
    return <CategoryNotFound>No blogs found in this category.</CategoryNotFound>;
  }

  return (
    <Wrapper>
      <Grid>
        <IntroCommunitiesTile />
        <CreateBlogCTATile categoryName={decodedName} />
        <BlogsTile blogs={blogs} />
      </Grid>
    </Wrapper>
  );
};

export default UserBlogs;
