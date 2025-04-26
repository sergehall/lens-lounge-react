import React from 'react';
import {Tile, Image, Label, Overlay, HoverReveal, Grid} from "../home-page/homePage.styles";
import {Category} from "./categorySlice";


interface CategoriesProps {
    categories: Category[];
    onCategoryClick: (category: Category) => void;
}

const Categories: React.FC<CategoriesProps> = ({ categories, onCategoryClick }) => {
    return (
        <Grid>
            {categories.map((cat) => (
                <Tile
                    key={cat.name}
                    isFeatured={cat.featured}
                    onClick={() => onCategoryClick(cat)}
                >
                    <Image src={cat.imageUrl} alt={cat.name} />
                    <HoverReveal />
                    <Overlay />
                    <Label>{cat.name}</Label>
                </Tile>
            ))}
        </Grid>
    );
};

export default Categories;
