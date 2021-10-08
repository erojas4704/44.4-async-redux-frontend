import { useDispatch } from "react-redux";
import { deleteComment } from "../Reducers/actions";
import Comment from "./Comment";

export default function CommentView({ post }) {
    const dispatch = useDispatch();
    const comments = post.comments;
    
    const commentArray = comments ?
        Object.keys(comments).map(key => { return { id: key, ...comments[key] } })
        : [];

    const handleDelete = (comment) => {
        dispatch(deleteComment(comment.id, post.id))
    }
    return (
        <>
            {commentArray.map(comment => <Comment deleteComment={handleDelete} key={comment.id} comment={comment} />)}
        </>
    )
}