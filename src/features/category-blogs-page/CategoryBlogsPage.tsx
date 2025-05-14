// src/features/category-blogs-page/CategoryBlogsPage.tsx

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../../components/loader/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

import { Grid, Wrapper } from './categoryBlogsPage.styles';
import IntroCommunitiesTile from './tiles/intro-tile/IntroCommunitiesTile';
import BlogsTile from './tiles/blogs-tile/BlogsTile';
import CreateBlogCTATile from './tiles/create-blog-tile/CreateBlogCTATile';
import { selectCategoryBlogsLoading } from './selectors';
import { loadCategoryBlogs } from './categoryBlogsPageSlice';
import { selectIsCategoryLoaded } from './selectors';

const CategoryBlogsPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const decodedName = decodeURIComponent(name || '');

  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectCategoryBlogsLoading(decodedName));
  const isLoaded = useAppSelector(selectIsCategoryLoaded(decodedName));

  useEffect(() => {
    if (decodedName && !isLoaded) {
      dispatch(loadCategoryBlogs(decodedName));
    }
  }, [decodedName, isLoaded, dispatch]);

  if (!name) return <div>Category not found</div>;
  if (loading) return <Loader />;

  return (
    <Wrapper>
      <Grid>
        <IntroCommunitiesTile />
        <CreateBlogCTATile categoryName={decodedName} />
        <BlogsTile />
      </Grid>
    </Wrapper>
  );
};

export default CategoryBlogsPage;
