import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectBlogsByCategory} from './mock/selectors';
import {Grid, Wrapper} from './categoryBlogsPage.styles';
import IntroCommunitiesTile from './tiles/intro-tile/IntroCommunitiesTile';
import BlogsTile from "./tiles/blogs-tile/BlogsTile";
import CreateBlogCTATile from "./tiles/create-blog-tile/CreateBlogCTATile";

const CategoryBlogsPage: React.FC = () => {
    const {name} = useParams<{ name?: string }>();
    const decodedName = name ? decodeURIComponent(name) : '';
    const blogs = useSelector(selectBlogsByCategory(decodedName));

    if (!name) {
        return <div>Category not found</div>;
    }

    return (
        <Wrapper>
            <Grid>
                <IntroCommunitiesTile/>
                <CreateBlogCTATile categoryName={decodedName}/>
                <BlogsTile blogs={blogs} />
            </Grid>
        </Wrapper>
    );
};

export default CategoryBlogsPage;
