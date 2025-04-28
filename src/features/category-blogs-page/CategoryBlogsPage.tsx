import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {Grid, Wrapper} from './categoryBlogsPage.styles';
import IntroCommunitiesTile from './tiles/intro-tile/IntroCommunitiesTile';
import BlogsTile from './tiles/blogs-tile/BlogsTile';
import CreateBlogCTATile from './tiles/create-blog-tile/CreateBlogCTATile';
import {RootState, AppDispatch} from '../../app/store';
import {BlogPreview} from './types/blogs.types';
import {makeSelectBlogsForCategory, selectCategoryBlogsLoading} from './selectors';
import Loader from "../../components/loader/Loader";
import {loadCategoryBlogs} from "./categoryBlogsPageSlice";

const CategoryBlogsPage: React.FC = () => {
    const {name} = useParams<{ name: string }>(); // Make sure name is required
    const decodedName = decodeURIComponent(name || '');

    const dispatch = useDispatch<AppDispatch>(); // Typed dispatch for thunks
    const blogs = useSelector<RootState, BlogPreview[]>(makeSelectBlogsForCategory(decodedName));
    const loading = useSelector(selectCategoryBlogsLoading(decodedName));

    useEffect(() => {
        if (decodedName) {
            dispatch(loadCategoryBlogs(decodedName));
        }
    }, [decodedName, dispatch]); // Dispatch on mount or when category changes

    if (!name) {
        return <div>Category not found</div>;
    }

    if (loading) {
        return <Loader/>;
    }

    return (
        <Wrapper>
            <Grid>
                <IntroCommunitiesTile/>
                <CreateBlogCTATile categoryName={decodedName}/>
                <BlogsTile blogs={blogs}/>
            </Grid>
        </Wrapper>
    );
};

export default CategoryBlogsPage;
