import React from 'react';
import { Tile, Image, Label, Overlay, HoverReveal, Grid } from '../home-page/homePage.styles';
import { Category } from './types/category.types';

interface CategoriesProps {
    categories: Category[];
    onCategoryClick: (category: Category) => void;
}

const Categories: React.FC<CategoriesProps> = ({ categories, onCategoryClick }) => (
    <Grid>
        {categories.map((category) => (
            <Tile
                key={category.name}
                isFeatured={category.featured}
                onClick={() => onCategoryClick(category)}
            >
                <Image src={category.imageUrl} alt={category.name} />
                <HoverReveal />
                <Overlay />
                <Label>{category.name}</Label>
            </Tile>
        ))}
    </Grid>
);

export default Categories;
