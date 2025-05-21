// src/features/categories/Categories.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from '../home-page/homePage.styles';
import { RouteManager } from '../../routes/utils/routeManager';
import { useAppSelector } from '../../hooks/reduxHooks';

import { selectCategories } from './selectors';
import { Category } from './types/category.types';

const Categories: React.FC = () => {
  const navigate = useNavigate();
  const categories = useAppSelector(selectCategories);

  const handleCategoryClick = (category: Category) => {
    navigate(RouteManager.getCategoryPathByName(category.name));
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
