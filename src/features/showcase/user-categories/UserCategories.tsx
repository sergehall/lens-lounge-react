import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { selectProfile } from '../../auth/authSlice';
import { Category } from '../../categories/types/category.types';
import CreateNewBlogTile from '../create-blog-tile/CreateNewBlogTile';
import { slugify } from '../../../utils/slugify';
import { RouteManager } from '../../../utils/routes/routeManager';
import { loadUserBlogs } from '../user-blogs/userBlogsSlice';
import * as S from '../showcasePage.styles';

import { makeSelectUserCategoriesFromBlogs } from './selectors';

const UserCategories: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const profile = useAppSelector(selectProfile);
  const username = profile?.username || '';

  // Load all the user's blogs
  useEffect(() => {
    if (username) {
      dispatch(loadUserBlogs(username));
    }
  }, [username, dispatch]);

  const categories: Category[] = useAppSelector(makeSelectUserCategoriesFromBlogs(username));

  const handleCategoryClick = (category: { name: string }) => {
    const slug = slugify(category.name);
    navigate(RouteManager.getShowcaseCategoryPathBySlug(slug));
  };

  return (
    <S.Grid>
      <CreateNewBlogTile />
      {categories.length > 0 &&
        categories.map((category) => (
          <S.Tile
            key={category.name}
            $isFeatured={category.featured}
            onClick={() => handleCategoryClick(category)}
          >
            <S.Image src={category.imageUrl} alt={category.name} />
            <S.HoverReveal />
            <S.Overlay />
            <S.Label>{category.name}</S.Label>
          </S.Tile>
        ))}
    </S.Grid>
  );
};

export default UserCategories;
