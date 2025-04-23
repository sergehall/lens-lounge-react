import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectBlogsByCategory} from './mock/selectors';
import {BlogTile, Content, Grid, Wrapper} from './categoryPage.styles';
import IntroCommunitiesTile from './tiles/intro-communities/IntroCommunitiesTile';
import CreateBlogCTA from './tiles/create-blog-CTA/CreateBlogCTA';

const CategoryPage: React.FC = () => {
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
                <CreateBlogCTA categoryName={decodedName}/>

                {blogs.map((blog) => (
                    <BlogTile key={blog.id}>
                        <img src={blog.imageUrl} alt={blog.title}/>
                        <Content>
                            <h4>{blog.title}</h4>
                            <p>{blog.summary}</p>
                            <span>Last posted: {blog.lastPosted}</span>
                        </Content>
                    </BlogTile>
                ))}
            </Grid>
        </Wrapper>
    );
};

export default CategoryPage;
