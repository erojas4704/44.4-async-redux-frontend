import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./PostPreview.css";

export default function PostPreview({ post }) {
    return (
        <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="post-preview">
                <div className="post-preview-inlay">
                    <div className="post-preview-title text-primary">{post.title}</div>
                    <div className="post-preview-description">{post.description}</div >
                </div>
                <div className="post-preview-bottom">
                    <div className="post-vote-bar">
                        <div>{post.votes} votes</div>
                        <div>
                            <FontAwesomeIcon className="mx-1" icon={faThumbsUp} style={{ color: '#2ecc71' }} />
                            <FontAwesomeIcon className="mx-1" icon={faThumbsDown} style={{ color: 'red' }} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}