import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategories } from '../categories/selectors';
import { Category } from '../categories/categorySlice';
import { RootState } from '../../app/store';
import { RouteManager } from '../../utils/routeManager';
import { slugify } from '../../utils/slugify';
import Categories from '../categories/Categories';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const categories = useSelector((state: RootState) => selectCategories(state));

    const handleClick = (category: Category) => {
        const slug = slugify(category.name);
        navigate(RouteManager.getCategoryPathBySlug(slug));
    };

    return <Categories categories={categories} onCategoryClick={handleClick} />;
};

export default HomePage;

