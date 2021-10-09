import { useDispatch } from "react-redux";
import { deleteCommentFromAPI } from "../Reducers/actions";
import Comment from "./Comment";

export default function CommentView({ post, deleteComment }) {
    const dispatch = useDispatch();

    const handleDelete = (comment) => {
        dispatch(deleteCommentFromAPI(post.id, comment.id))
    }

    const comments = post.comments ?
        Object.keys(post.comments).map(key => post.comments[key]) :
        [];

    return (
        <>
            <h4>Comments</h4>
            {comments && comments.map(comment => <Comment deleteComment={handleDelete} key={comment.id} comment={comment} />)}
        </>
    )
}