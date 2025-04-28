// MyCategories.tsx
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../app/store';
import { Category } from '../../categories/types/category.types';
import { Grid, HoverReveal, Image, Label, Overlay, Tile } from '../showcasePage.styles';
import CreateNewBlogTile from '../create-blog-tile/CreateNewBlogTile';
import { slugify } from '../../../utils/slugify';
import { RouteManager } from '../../../utils/routeManager';
import { mockCategories } from '../../categories/mock/mockCategories';
import placeholderImageDefault from '../../../assets/images/placeholderImageDefault.png';
import { getUserBlogsByCategory } from '../my-blogs/mocks/getUserBlogsByCategory'; // You had this function!

const MyCategories: React.FC = () => {
    const navigate = useNavigate();

    // Get profile from Redux
    const profile = useSelector((state: RootState) => state.showcasePage.profile);

    // Compute userBlogsByCategory based on profile.username === blog.author
    const userBlogsByCategory = useMemo(() => {
        if (!profile?.username) return {};
        return getUserBlogsByCategory(profile.username);
    }, [profile.username]);

    // Build categories based on blogs
    const categories: Category[] = useMemo(() => {
        return Object.keys(userBlogsByCategory).map((categoryName) => {
            const found = mockCategories.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase());
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
        <Grid>
            <CreateNewBlogTile />
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

export default MyCategories;
