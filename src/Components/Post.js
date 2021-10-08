import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import NewCommentForm from "./NewCommentForm";
import { Link } from "react-router-dom";
import { addComment } from "../Reducers/actions";
import CommentView from "./CommentView";
import "./Post.css";


export default function Post() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const post = useSelector(state => state.posts[id]);

    const handleNewComment = (form) => {
        dispatch(addComment(id, form.comment));
    };

    if (!post) {
        return <div className="error">Post not found wtf dude</div>
    }

    return (
        <div className="post">
            <div className="post-nav">
                <h2 className="post-header">{post.title}</h2>
                <div className="post-options">
                    <Link to={`/edit/${id}`} ><FontAwesomeIcon className="post-option" style={{ color: '#3498db' }} icon={faEdit} /></Link>
                    <Link to={`/delete/${id}`} ><FontAwesomeIcon className="post-option" style={{ color: '#e74c3c' }} icon={faTrash} /></Link>
                </div>
            </div>
            <div className="post-description">{post.description}</div>
            <div className="post-body">{post.body}</div>
            <CommentView post={post} />
            <NewCommentForm submit={handleNewComment} />
        </div>
    )
}