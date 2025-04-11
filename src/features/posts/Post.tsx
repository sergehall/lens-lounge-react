import React, {useState} from "react";
import {
    Wrapper,
    Image,
    Content,
    Title,
    Description,
    Meta,
    Actions,
    ActionButton,
    Footer,
} from "./post.styles";
import {useDispatch, useSelector} from "react-redux";
import {toggleLike} from "./interactions/postInteractionsSlice";
import {RootState} from "../../app/store";
import {PostImageType} from "./post-images/types/postImage";
import {PostType} from "./types/postType";
import { Icons } from "../../utils/icons";


type Comment = {
    id: string;
    user: string;
    text: string;
};


export interface PostProps {
    post: PostType;
    image: PostImageType;
}


const Post: React.FC<PostProps> = ({post, image}) => {
    const dispatch = useDispatch();
    const likes = useSelector((state: RootState) => state.postInteractions.likes[post.id] || 0);
    const liked = useSelector((state: RootState) => state.postInteractions.likedByUser[post.id] || false);

    const [showAllComments, setShowAllComments] = useState(false);
    const [comments, setComments] = useState<Comment[]>([{
        id: '1',
        user: 'photofan23',
        text: 'Incredible lighting!'
    }, {
        id: '2',
        user: 'sunsetlover',
        text: 'Where was this taken?'
    }]);

    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newComment.trim()) {
            setComments([...comments, {id: Date.now().toString(), user: 'you', text: newComment}]);
            setNewComment('');
        }
    };

    const timeAgo = (date: string): string => {
        const postDate = new Date(date);
        const now = new Date();
        const diff = Math.floor((now.getTime() - postDate.getTime()) / 1000);
        if (diff < 60) return `${diff}s ago`;
        if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
        if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
        return `${Math.floor(diff / 86400)}d ago`;
    };

    return (
        <Wrapper>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px'}}>
                <Meta>
                    <strong>@{post.blogName}</strong> • {timeAgo(post.createdAt)}
                </Meta>
                {/*<FaEllipsisHIcon style={{ cursor: "pointer" }} />*/}
                <Icons.Ellipsis />
            </div>

            <Image src={image.imageUrl} alt={post.title} loading="lazy"/>

            <Actions>
                <ActionButton onClick={() => dispatch(toggleLike({ postId: post.id }))} $active={liked}>
                    {liked ?  <Icons.Heart /> : <Icons.RegHeart />}
                </ActionButton>

                <ActionButton>
                    <Icons.Comment />
                </ActionButton>

                <ActionButton>
                    <Icons.Share />
                </ActionButton>
            </Actions>


            <Content>
                <div style={{fontWeight: 'bold', paddingBottom: '4px'}}>{likes} likes</div>

                {comments.length > 0 && (
                    <div>
                        {!showAllComments && comments.length > 1 && (
                            <div
                                style={{color: '#888', cursor: 'pointer', marginBottom: '6px'}}
                                onClick={() => setShowAllComments(true)}
                            >
                                View all {comments.length} comments
                            </div>
                        )}
                        {(showAllComments ? comments : [comments[0]]).map(comment => (
                            <div key={comment.id}>
                                <strong>{comment.user}</strong> {comment.text}
                            </div>
                        ))}
                    </div>
                )}

                <form onSubmit={handleCommentSubmit} style={{marginTop: '10px'}}>
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={e => setNewComment(e.target.value)}
                        style={{width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #ccc'}}
                    />
                </form>

                <Title>{post.title}</Title>
                <Meta>
                    <span>{post.blogName}</span> • <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                </Meta>
                <Description>{post.shortDescription}</Description>
            </Content>

            <Footer>
                <span>By {post.postOwnerId}</span>
            </Footer>
        </Wrapper>
);
};

export default Post;
