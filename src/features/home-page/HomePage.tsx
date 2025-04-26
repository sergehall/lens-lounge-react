// src/components/HomePage/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';
import { RouteManager } from '../../utils/routeManager';
import { slugify } from '../../utils/slugify';
import { Category } from '../categories/types/category.types';
import { loadCategoryBlogs } from '../category-blogs-page/categoryBlogsPageSlice';
import Categories from '../categories/Categories';
import Loader from '../../components/loader/Loader';
import {selectCategories} from "../categories/selectors";


const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const categories = useSelector(selectCategories);
    const isAnyCategoryLoading = useSelector((state: RootState) =>
        Object.values(state.categoryBlogs.loading).some((loading) => loading)
    );

    const handleClick = async (category: Category) => {
        const slug = slugify(category.name);
        const categoryKey = category.name;

        try {
            await dispatch(loadCategoryBlogs(categoryKey)).unwrap();
        } catch (error) {
            console.error('Failed to load category blogs:', error);
        }

        navigate(RouteManager.getCategoryPathBySlug(slug));
    };

    if (isAnyCategoryLoading) {
        return <Loader />;
    }

    return <Categories categories={categories} onCategoryClick={handleClick} />;
};

export default HomePage;

