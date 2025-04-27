import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CategoryNotFound, Grid, Wrapper } from './myBlogs.styles';
import IntroCommunitiesTile from './tiles/intro-tile/IntroCommunitiesTile';
import BlogsTile from './tiles/blogs-tile/BlogsTile';
import CreateBlogCTATile from './tiles/create-blog-tile/CreateBlogCTATile';
import { RootState } from "../../../app/store";
import { ProfileState } from "../profile/profileSlice";
import { getUserBlogsByCategory } from "./mocks/getUserBlogsByCategory";

const MyBlogs: React.FC = () => {
    const profile: ProfileState = useSelector((state: RootState) => state.showcasePage.profile);

    const userBlogsByCategory = useMemo(() => getUserBlogsByCategory(profile.username), [profile.username]);

    const categoryEntries = Object.entries(userBlogsByCategory);

    if (categoryEntries.length === 0) {
        return <CategoryNotFound>No blogs found for your profile.</CategoryNotFound>
    }

    return (
        <Wrapper>
            {categoryEntries.map(([categoryName, blogs]) => (
                <div key={categoryName}>
                    <h2>{categoryName}</h2> {/* Category name */}
                    <Grid>
                        <IntroCommunitiesTile />
                        <CreateBlogCTATile categoryName={categoryName} />
                        <BlogsTile blogs={blogs} />
                    </Grid>
                </div>
            ))}
        </Wrapper>
    );
};

export default MyBlogs;

// import React, {useMemo} from 'react';
// import {useParams} from 'react-router-dom';
// import {useSelector} from 'react-redux';
// import {CategoryNotFound, Grid, Wrapper} from './myBlogs.styles';
// import IntroCommunitiesTile from './tiles/intro-tile/IntroCommunitiesTile';
// import BlogsTile from './tiles/blogs-tile/BlogsTile';
// import CreateBlogTile from './tiles/create-blog-tile/CreateBlogTile';
// import {RootState} from "../../../app/store";
// import {ProfileState} from "../profile/profileSlice";
// import {getUserBlogsByCategory} from "./mocks/getUserBlogsByCategory";
// import {BlogPreview} from "./types/blogs.types";
//
// const MyBlogs: React.FC = () => {
//     const {name} = useParams<{ name: string }>();
//     const decodedName = decodeURIComponent(name || '');
//
//     const profile: ProfileState = useSelector((state: RootState) => state.showcasePage.profile);
//
//     const userBlogsByCategory = useMemo(() => getUserBlogsByCategory(profile.username), [profile.username]);
//
//     const blogs: BlogPreview[] = userBlogsByCategory[decodedName] || [];
//
//     // console.log('name', name);
//     // console.log('profile', profile);
//     if (!name) {
//         return <CategoryNotFound>Category not found</CategoryNotFound>
//     }
//
//     if (!blogs.length) {
//         return <CategoryNotFound>No blogs found in this category</CategoryNotFound>
//     }
//
//     return (
//         <Wrapper>
//             <Grid>
//                 <IntroCommunitiesTile />
//                 <CreateBlogTile categoryName={decodedName} />
//                 <BlogsTile blogs={blogs} />
//             </Grid>
//         </Wrapper>
//     );
// };
//
// export default MyBlogs;
