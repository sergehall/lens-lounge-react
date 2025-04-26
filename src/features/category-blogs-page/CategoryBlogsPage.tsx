import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Grid, Wrapper } from './categoryBlogsPage.styles';
import IntroCommunitiesTile from './tiles/intro-tile/IntroCommunitiesTile';
import BlogsTile from './tiles/blogs-tile/BlogsTile';
import CreateBlogCTATile from './tiles/create-blog-tile/CreateBlogCTATile';
import { RootState } from '../../app/store';
import { BlogPreview } from './types/blogs.types';
import { makeSelectBlogsForCategory, selectCategoryBlogsLoading } from './selectors';
import Loader from "../../components/loader/Loader"; // ✅ Added loading selector

const CategoryBlogsPage: React.FC = () => {
    const { name } = useParams<{ name?: string }>();
    const decodedName = name ? decodeURIComponent(name) : '';

    const blogs = useSelector<RootState, BlogPreview[]>(makeSelectBlogsForCategory(decodedName));
    const loading = useSelector(selectCategoryBlogsLoading);

    if (!name) {
        return <div>Category not found</div>;
    }

    if (loading) {
        return <Loader />;
    }

    return (
        <Wrapper>
            <Grid>
                <IntroCommunitiesTile />
                <CreateBlogCTATile categoryName={decodedName} />
                <BlogsTile blogs={blogs} />
            </Grid>
        </Wrapper>
    );
};

export default CategoryBlogsPage;
