import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../posts/Post";
import { AppDispatch } from "../../app/store";
import {ErrorMsg, FeedContainer, Loader} from "./home.styles";
import {fetchHomePosts, selectHomeError, selectHomeLoading, selectHomePosts} from "./homePostSlice";


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
            {!loading && !error && posts.map((postProps, idx) => (
                <Post key={idx} {...postProps} />
            ))}
        </FeedContainer>
    );
};

export default HomePage;