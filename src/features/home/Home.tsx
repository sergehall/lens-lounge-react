import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import SinglePost from "../posts/SinglePost";
import {
    fetchHomePosts,
    selectHomeError,
    selectHomeLoading,
    selectHomePosts,
} from "./homePostSlice";
import { ErrorMsg, FeedContainer, Loader } from "./home.styles";

const HomePage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const posts = useSelector(selectHomePosts);
    const loading = useSelector(selectHomeLoading);
    const error = useSelector(selectHomeError);

    useEffect(() => {
        dispatch(fetchHomePosts());
    }, [dispatch]);

    return (
        <FeedContainer>
            {loading && <Loader>Loading posts...</Loader>}
            {error && <ErrorMsg>{error}</ErrorMsg>}
            {!loading &&
                !error &&
                posts.map((postProps) => (
                    <SinglePost key={postProps.post.id} {...postProps} />
                ))}
        </FeedContainer>
    );
};

export default HomePage;
