// /src/components/HomePageStart/HomePageStart.tsx
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectCategories} from '../categories/selectors';
import {
    Grid,
    Tile,
    Image,
    Label,
    Overlay
} from './homePageStart.styles';
import {Category} from '../categories/categorySlice';
import {RootState} from '../../app/store';
import {RouteManager} from "../../utils/routeManager";
import {slugify} from "../../utils/slugify";

const HomePageStart: React.FC = () => {
    const navigate = useNavigate();
    const categories = useSelector((state: RootState) => selectCategories(state));

    const handleClick = (category: Category) => {
        const slug = slugify(category.name);

        navigate(RouteManager.getCategoryPathBySlug(slug));
    };

    return (
        <Grid>
            {categories.map((cat) => (
                <Tile
                    key={cat.name}
                    isFeatured={cat.featured}
                    onClick={() => handleClick(cat)}
                >
                    <Image src={cat.imageUrl} alt={cat.name}/>
                    <Overlay/>
                    <Label>{cat.name}</Label>
                </Tile>
            ))}
        </Grid>
    );
};

export default HomePageStart;
