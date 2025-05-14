// src/features/categories/Categories.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from '../home-page/homePage.styles';
import { slugify } from '../../utils/slugify';
import { RouteManager } from '../../utils/routes/routeManager';
import { useAppSelector } from '../../hooks/reduxHooks';

import { selectCategories } from './selectors';
import { Category } from './types/category.types';

const Categories: React.FC = () => {
  const navigate = useNavigate();

  // Pull default user-categories from Redux
  const categories = useAppSelector(selectCategories);

  const handleCategoryClick = (category: Category) => {
    const slug = slugify(category.name);
    navigate(RouteManager.getCategoryPathBySlug(slug));
  };

  return (
    <S.Grid>
      {categories.map((category) => (
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

export default Categories;
