// Categories.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Tile, Image, Label, Overlay, HoverReveal, Grid } from '../home-page/homePage.styles';
import { Category } from './types/category.types';
import { slugify } from '../../utils/slugify';
import { RouteManager } from '../../utils/routeManager';
import {selectCategories} from "./selectors";

const Categories: React.FC = () => {
    const navigate = useNavigate();

    // Pull default categories from Redux
    const categories = useSelector(selectCategories);

    const handleCategoryClick = (category: Category) => {
        const slug = slugify(category.name);
        navigate(RouteManager.getCategoryPathBySlug(slug));
    };

    return (
        <Grid>
            {categories.map((category) => (
                <Tile
                    key={category.name}
                    isFeatured={category.featured}
                    onClick={() => handleCategoryClick(category)}
                >
                    <Image src={category.imageUrl} alt={category.name} />
                    <HoverReveal />
                    <Overlay />
                    <Label>{category.name}</Label>
                </Tile>
            ))}
        </Grid>
    );
};

export default Categories;
