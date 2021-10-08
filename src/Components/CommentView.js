import { useDispatch } from "react-redux";
import { deleteComment } from "../Reducers/actions";
import Comment from "./Comment";

export default function CommentView({ post }) {
    const dispatch = useDispatch();
    
    const handleDelete = (comment) => {
        dispatch(deleteComment(comment.id, post.id))
    }
    
    return (
        <>
            {post.comments && post.comments.map(comment => <Comment deleteComment={handleDelete} key={comment.id} comment={comment} />)}
        </>
    )
}