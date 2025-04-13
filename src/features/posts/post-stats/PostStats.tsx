// PostStats.tsx
import React from "react";
import { useSelector } from "react-redux";
import {RootState} from "../../../app/store";
import {StatsWrapper} from "./postStats.styles";


interface PostStatsProps {
    postId: string;
}

const PostStats: React.FC<PostStatsProps> = ({ postId }) => {
    const likes = useSelector((state: RootState) => state.postInteractions.likes[postId] || 0);

    return <StatsWrapper>{likes} likes</StatsWrapper>;
};

export default PostStats;