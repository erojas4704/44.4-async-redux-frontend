import { faEdit, faThumbsDown, faThumbsUp, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import NewCommentForm from "./NewCommentForm";
import { Link } from "react-router-dom";
import { getPostDetailsFromAPI, pushNewCommentToAPI, votePostInAPI } from "../Reducers/actions";
import CommentView from "./CommentView";
import "./Post.css";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";


export default function Post() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const post = useSelector(state => state.posts[id]);

    useEffect(() => {
        dispatch(getPostDetailsFromAPI(id));
    }, [id, dispatch])

    const handleNewComment = (form) => {
        dispatch(pushNewCommentToAPI(id, form));
    };

    const vote = (direction) => {
        dispatch(votePostInAPI(id, direction));
    }

    if (!post) {
        return <LoadingSpinner />
    }

    return (
        <div className="post">
            <div className="post-nav">
                <div className="post-nav-left">
                    <h4 className="post-header">{post.title}</h4>
                    <p className="post-description">{post.description}</p>
                </div>
                <div className="post-nav-right">
                    <div className="post-nav-row right">
                        <Link to={`/edit/${id}`} ><FontAwesomeIcon className="post-option" style={{ color: '#3498db' }} icon={faEdit} /></Link>
                        <Link to={`/delete/${id}`} ><FontAwesomeIcon className="post-option" style={{ color: '#e74c3c' }} icon={faTrash} /></Link>
                    </div>
                    <div className="post-nav-row right">
                        <div className="mx-2 post-nav-votes">{post.votes} Votes:</div>
                        <div>
                            <FontAwesomeIcon onClick={() => vote("up")} className="post-option" icon={faThumbsUp} style={{ color: '#2ecc71' }} />
                            <FontAwesomeIcon onClick={() => vote("down")} className="post-option" icon={faThumbsDown} style={{ color: 'red' }} />
                        </div>
                    </div>
                </div>
            </div>
            <p className="post-body">{post.body}</p>
            <CommentView post={post} />
            <NewCommentForm submit={handleNewComment} />
        </div>
    )
}