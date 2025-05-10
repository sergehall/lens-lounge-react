// src/features/showcase/user-categories/UserCategories.tsx
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../../hooks/reduxHooks';
import { Category } from '../../categories/types/category.types';
import CreateNewBlogTile from '../create-blog-tile/CreateNewBlogTile';
import { slugify } from '../../../utils/slugify';
import { RouteManager } from '../../../utils/routes/routeManager';
import { categoriesMock } from '../../categories/mock/categoriesMock';
import placeholderImageDefault from '../../../assets/images/placeholderImageDefault.png';
import { getUserBlogsByCategory } from '../user-blogs/mocks/getUserBlogsByCategory';
import { selectProfile } from '../../auth/authSlice';
import * as S from '../showcasePage.styles';

const UserCategories: React.FC = () => {
  const navigate = useNavigate();

  // Get profile from Redux
  const profile = useAppSelector(selectProfile);

  const userBlogsByCategory = useMemo(() => {
    if (!profile || !profile.username) {
      return {};
    }
    // Compute userBlogsByCategory based on profile.username === blog.author
    return getUserBlogsByCategory(profile.username);
  }, [profile]);

  // Build user-categories based on blog
  const categories: Category[] = useMemo(() => {
    return Object.keys(userBlogsByCategory).map((categoryName) => {
      const found = categoriesMock.find(
        (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
      );
      return {
        name: found?.name || categoryName,
        imageUrl: found?.imageUrl || placeholderImageDefault,
        featured: false,
      };
    });
  }, [userBlogsByCategory]);

  const handleCategoryClick = (category: Category) => {
    const slug = slugify(category.name);
    navigate(RouteManager.getShowcaseCategoryPathBySlug(slug)); // use /showcase/:name
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
