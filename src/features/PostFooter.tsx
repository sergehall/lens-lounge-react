// PostFooter.tsx
import React from 'react';

import { Footer } from './posts/post-footer/postFooter.styles';

interface Props {
  postOwnerId: string;
}

const PostFooter: React.FC<Props> = ({ postOwnerId }) => {
  return <Footer>By {postOwnerId}</Footer>;
};

export default PostFooter;
