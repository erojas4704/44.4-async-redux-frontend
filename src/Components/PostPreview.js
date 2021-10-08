import { Link } from "react-router-dom";
import "./PostPreview.css";

export default function PostPreview({ post }) {
    return (
        <Link to={`/post/${post.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="post-preview">
                <div className="post-preview-title text-primary">{post.title}</div>
                <div className="post-preview-description">{post.description}</div>
            </div>
        </Link>
    )
}