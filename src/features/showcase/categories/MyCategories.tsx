import React from 'react';
import {Category} from "../../categories/types/category.types";
import {Grid, HoverReveal, Image, Label, Overlay, Tile} from "../showcasePage.styles";
import CreateNewBlogTile from "../create-blog-tile/CreateNewBlogTile";


interface CategoriesProps {
    categories: Category[];
    onCategoryClick: (category: Category) => void;
}

const MyCategories: React.FC<CategoriesProps> = ({categories, onCategoryClick}) => (
        <Grid>
            <CreateNewBlogTile/>
            {categories.map((category) => (
                <Tile
                    key={category.name}
                    isFeatured={category.featured}
                    onClick={() => onCategoryClick(category)}
                >
                    <Image src={category.imageUrl} alt={category.name}/>
                    <HoverReveal/>
                    <Overlay/>
                    <Label>{category.name}</Label>
                </Tile>
            ))}
        </Grid>
);

export default MyCategories;
