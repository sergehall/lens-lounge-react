// /src/pages/CategoryPage/CategoryPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBlogsByCategory } from './mock/selectors';
import {BlogTile, CTAButton, Grid, Tile, Wrapper} from "./categoryPage.styles";


const CategoryPage: React.FC = () => {
    const { name } = useParams<{ name?: string }>();

    if (!name) return <div>Category not found</div>;

    const decodedName = decodeURIComponent(name);
    const blogs = useSelector(selectBlogsByCategory(decodedName));

    return (
        <Wrapper>
            {/* Intro Tile */}
            <Tile>
                <h3>Introducing Communities</h3>
                <p>
                    Communities are public and private spaces you can create on Lens Lounge—for you, your
                    people, and the things you love.
                </p>
            </Tile>

            {/* CTA Tile */}
            <Tile>
                <h3>Create your own blog about {decodedName}</h3>
                <p>
                    Communities are spaces for your ideas. Get started in minutes.
                </p>
                <CTAButton>Create</CTAButton>
            </Tile>

            {/* Blog List */}
            <Grid>
                {blogs.map((blog) => (
                    <BlogTile key={blog.id}>
                        <img src={blog.imageUrl} alt={blog.title} />
                        <h4>{blog.title}</h4>
                        <p>{blog.summary}</p>
                        <span>Last posted: {blog.lastPosted}</span>
                    </BlogTile>
                ))}
            </Grid>
        </Wrapper>
    );
};

export default CategoryPage;
