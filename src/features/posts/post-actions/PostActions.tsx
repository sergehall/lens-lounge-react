import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {RootState} from "../../../app/store";
import {Icons} from "../../../utils/icons";
import {toggleLike} from "../interactions/postInteractionsSlice";
import {ActionBar, Button} from "./postActions.styles";


interface PostActionsProps {
    postId: string;
}

const PostActions: React.FC<PostActionsProps> = ({ postId }) => {
    const dispatch = useDispatch();
    const liked = useSelector((state: RootState) => state.postInteractions.likedByUser[postId]);

    return (
        <ActionBar>
            <Button onClick={() => dispatch(toggleLike({ postId }))} $active={liked}>
                {liked ? <Icons.Heart /> : <Icons.RegHeart />}
            </Button>
            <Button>
                <Icons.Comment />
            </Button>
            <Button>
                <Icons.Share />
            </Button>
        </ActionBar>
    );
};

export default PostActions;