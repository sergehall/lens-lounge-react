import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import SinglePost from '../SinglePost';
import { useAppDispatch } from '../../../hooks/reduxHooks';

import {
  fetchHomePosts,
  selectHomeError,
  selectHomeLoading,
  selectHomePosts,
} from './postsSliderSlice';
import { ErrorMsg, FeedContainer, Loader } from './postsSlider.styles';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
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
        posts.map((postProps) => <SinglePost key={postProps.post.id} {...postProps} />)}
    </FeedContainer>
  );
};

export default HomePage;
